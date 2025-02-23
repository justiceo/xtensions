// import FilerobotImageEditor from "filerobot-image-editor"; // Load library from NPM
// or load from CDN as following and use (window.FilerobotImageEditor):

/*
why not import from NPM?
- That package on npm is outdated
- Need to switch to TS to take advantage of type system.
- Didn't work when I tried it - got some errors.
*/

function addCopyToClipboardButton() {
  const saveButton = document.querySelector("button.FIE_topbar-save-button");
  if (!saveButton) {
    console.error("Save button not found");
    return;
  }

  // clone saveButton.
  const copyButton = saveButton.cloneNode(true);
  const textLabel = copyButton.querySelector("span.SfxButton-Label");
  textLabel.textContent = "Copy";

  // set onClick handler for copy button.
  copyButton.addEventListener("click", (e) => {
    console.log("Clicked copy");
    console.log(
      "image data",
      filerobotImageEditor.getCurrentImgData({ extension: "png" })
    );
    const imgData = filerobotImageEditor.getCurrentImgData({
      extension: "png",
    });

    console.log("image length", imgData.imageData.imageBase64.length);

    // copy image to clipboard
    copyBase64ImageToClipboard(imgData.imageData.imageBase64).then((res) => {
      console.log("Copied to clipboard", res);
    });
  });

  // append to the parent of saveButton.
  saveButton.parentNode.appendChild(copyButton);
  copyButton.style.marginLeft = "10px";
}

function addLinkToIndexPage() {
  const saveButton = document.querySelector("button.FIE_topbar-save-button");
  if (!saveButton) {
    console.error("Save button not found");
    return;
  }

  // Create a new link element
  const linkToIndex = document.createElement("a");
  linkToIndex.href = "gallery.html"; // Link to the index page
  linkToIndex.textContent = "Back to Gallery";
  linkToIndex.style.marginRight = "10px"; // Add some margin for spacing

  // Insert the link before the save button
  saveButton.parentNode.insertBefore(linkToIndex, saveButton);
}

function repurposeCloseButtonToDelete() {
  const closeButton = document.querySelector("button.FIE_topbar-close-button");
  if (!closeButton) {
    console.error("Close button not found");
    return;
  }

  closeButton.addEventListener("click", (e) => {
    deleteImage(fileKey);
    window.location.href = "gallery.html";
  });
  closeButton.innerHTML = "🗑️";
}

// Clipboard only supports PNG format.
async function copyBase64ImageToClipboard(base64Data) {
  // Create a Blob from the base64 data
  const base64Content = base64Data.split(",")[1]; // Remove the "data:image/png;base64," part
  const byteCharacters = atob(base64Content);

  // Create byte array directly
  const byteArray = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i);
  }

  const blob = new Blob([byteArray], { type: "image/png" });
  const clipboardItem = new ClipboardItem({ "image/png": blob });

  try {
    await navigator.clipboard.write([clipboardItem]);
    console.log("Image copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy image to clipboard:", err);
  }
}

function saveImage(imageObj) {
  // chrome.downloads.download allows saving to sub-directory and search too.
  if (!chrome || !chrome.downloads) {
    console.error("chrome.downloads not available");
    return;
  }

  const downloadOptions = {
    url: imageObj.imageBase64,
    filename: "capture_share/" + imageObj.fullName,
    conflictAction: "uniquify", // If the file already exists, rename it
  };
  console.log("downloadOptions", downloadOptions, "for image", imageObj);
  chrome.downloads.download(downloadOptions, function (downloadId) {
    if (chrome.runtime.lastError) {
      console.error("Download failed: " + chrome.runtime.lastError.message);
    } else {
      console.log("Download started with ID:", downloadId);
    }
  });
}

let filerobotImageEditor;
function setupEditor(imgData) {
  const { TABS, TOOLS } = window.FilerobotImageEditor;
  const config = {
    source: imgData,
    resetOnImageSourceChange: true,
    showCanvasOnly: false,
    // Use translate API to update the default keys https://github.com/scaleflex/filerobot-image-editor/blob/master/packages/react-filerobot-image-editor/src/context/defaultTranslations.js#L1
    useBackendTranslations: false,
    onSave: (editedImageObject, designState) => {
      saveImage(editedImageObject);
    },
    defaultSavedImageName:
      "Screenshot-" + new Date().toISOString().split("T")[0],
    showBackButton: false,
    annotationsCommon: {
      fill: "#00000000", // or should be no color? === undefined
      stroke: "#FF0000", // or should be no color? === undefined
      strokeWidth: 4,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 0,
      shadowColor: "#000000", // or should be no color? === undefined
      shadowOpacity: 1,
      opacity: 1,
    },
    Text: { text: "Double-click here to type..." },
    Rotate: { angle: 90, componentType: "slider" },
    translations: {
      profile: "Profile",
      coverPhoto: "Cover photo",
      facebook: "Facebook",
      socialMedia: "Social Media",
      fbProfileSize: "180x180px",
      fbCoverPhotoSize: "820x312px",
    },
    Crop: {
      ratio: "custom",
      autoResize: false,
      noPresets: true,
    },
    tabsIds: [TABS.ANNOTATE, TABS.ADJUST, "Filters", "Finetune", "Resize"],
    defaultTabId: TABS.ANNOTATE,
    defaultToolId: TOOLS.RECT,
  };

  // Assuming we have a div with id="editor_container"
  filerobotImageEditor = new window.FilerobotImageEditor(
    document.querySelector("#editor_container"),
    config
  );

  filerobotImageEditor.render({
    onClose: (closingReason) => {
      // Close action is handled by delete button.
    },
  });
}

const getFileKey = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  return url.searchParams.get("key");
};

const fileKey = getFileKey();
console.debug("getFileKey", fileKey);
if (fileKey) {
  // Fetch image from chrome.storage.local using fileKey
  chrome.storage.local.get(fileKey, (result) => {
    console.log("Fetched image", result);
    if (result[fileKey]) {
      const imgData = result[fileKey].dataUrl;
      console.log("image data", imgData);
      setupEditor(imgData);
    } else {
      console.error("Image not found in storage");
      setupEditor("img/no-image.jpg");
    }
  });
} else {
  console.error("File key not found in URL");
  setupEditor("img/no-image.jpg");
}

setTimeout(() => {
  repurposeCloseButtonToDelete();
  addCopyToClipboardButton();
  addLinkToIndexPage(); // Call the function to add the link
}, 500);

function deleteImage(key) {
  chrome.storage.local.remove(key, () => {
    console.log("Deleted image with key", key);
  });
}
