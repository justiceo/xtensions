---
layout: base
title: "Browser Extension Localizer"
description: Automatically translate and localize your Chrome and Firefox extensions to reach a global audience. Increase usage by up to 150% with internationalization (i18n)."
permalink: "/localizer"
---
<body>
  
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-6 pr-md-5">
        <h1>Automatically translate browser extensions</h1>
        <p class="mt-5"><span class="drop-cap bg-warning">17.9%</span> Percentage of internet users who are fluent in English. For context, English is the most popular language in the world followed by Chinese at 14.3%. This highlights the importance of i18n to reaching a global audience.</p>
        <p class="mt-4"><span class="drop-cap bg-danger text-white">12.3%</span> Percentage of chrome extensions that are available in more than one language, based on data from <a href="https://chrome-stats.com/extension-stats">chrome-stats.com</a>. This underscores the difficulty of internationalizing a browser extension</p>
        <p class="mt-4 mb-4">This tool works for all addons that follow the <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions">WebExtensions spec</a>, including Chrome extensions, Firefox addons, Edge addons and Opera addons.</p>
        <p class="mt-4 mb-4">For information on how to internationalize your extension, see the <a href="https://developer.chrome.com/docs/extensions/reference/api/i18n">Chrome i18n documentation</a>.</p>
      </div>
      <div class="col-md-6 pl-md-5">
        <div class="card mb-4 active" id="uploadCard">
          <div class="card-body">
            <h5 class="card-title">1. Upload Extension</h5>
            <p class="card-text">The zip file should include a manifest.json file in its root directory. The manifest file should set the default_locale field.</p>
            <div class="text-center">
              <input type="file" id="uploadZip" accept=".zip" style="display: none;">
              <button class="btn btn-primary" id="uploadBtn">Upload extension .zip</button>
            </div>
            <p class="text-center mt-2 d-none">OR</p>
            <div class="input-group mb-3 mt-3 d-none">
              <input type="text" id="extensionUrl" class="form-control" placeholder="Enter Chrome extension URL">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button" id="fetchExtensionBtn">Fetch extension</button>
              </div>
            </div>
            <div id="uploadMessage" class="mt-3"></div>
          </div>
        </div>
        <div class="card mb-4" id="translateCard">
          <div class="card-body">
            <h5 class="card-title">2. Translate</h5>
            <p class="card-text">Translate extension to any of the 52 supported languages on the Chrome Webstore by <a href="#" id="selectLocalesLink">selecting target locales</a>.</p>
            <div id="localesList" class="locale-list bg-light border pl-3 pr-3 ml-n3 mr-n3" style="display: none;">
              <a id="deselectAllBtn" class="mt-2 d-block">Deselect All</a>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ar" id="locale-ar" checked>
                <label class="form-check-label" for="locale-ar">Arabic</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="am" id="locale-am" checked>
                <label class="form-check-label" for="locale-am">Amharic</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="bg" id="locale-bg" checked>
                <label class="form-check-label" for="locale-bg">Bulgarian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="bn" id="locale-bn" checked>
                <label class="form-check-label" for="locale-bn">Bengali</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ca" id="locale-ca" checked>
                <label class="form-check-label" for="locale-ca">Catalan</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="cs" id="locale-cs" checked>
                <label class="form-check-label" for="locale-cs">Czech</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="da" id="locale-da" checked>
                <label class="form-check-label" for="locale-da">Danish</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="de" id="locale-de" checked>
                <label class="form-check-label" for="locale-de">German</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="el" id="locale-el" checked>
                <label class="form-check-label" for="locale-el">Greek</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="en" id="locale-en" checked>
                <label class="form-check-label" for="locale-en">English</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="en_AU" id="locale-en_AU" checked>
                <label class="form-check-label" for="locale-en_AU">English (Australia)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="en_GB" id="locale-en_GB" checked>
                <label class="form-check-label" for="locale-en_GB">English (GB)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="en_US" id="locale-en_US" checked>
                <label class="form-check-label" for="locale-en_US">English (USA)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="es" id="locale-es" checked>
                <label class="form-check-label" for="locale-es">Spanish</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="es_419" id="locale-es_419" checked>
                <label class="form-check-label" for="locale-es_419">Spanish (LatAm)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="et" id="locale-et" checked>
                <label class="form-check-label" for="locale-et">Estonian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="fa" id="locale-fa" checked>
                <label class="form-check-label" for="locale-fa">Persian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="fi" id="locale-fi" checked>
                <label class="form-check-label" for="locale-fi">Finnish</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="fil" id="locale-fil" checked>
                <label class="form-check-label" for="locale-fil">Filipino</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="fr" id="locale-fr" checked>
                <label class="form-check-label" for="locale-fr">French</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="gu" id="locale-gu" checked>
                <label class="form-check-label" for="locale-gu">Gujarati</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="he" id="locale-he" checked>
                <label class="form-check-label" for="locale-he">Hebrew</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="hi" id="locale-hi" checked>
                <label class="form-check-label" for="locale-hi">Hindi</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="hr" id="locale-hr" checked>
                <label class="form-check-label" for="locale-hr">Croatian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="hu" id="locale-hu" checked>
                <label class="form-check-label" for="locale-hu">Hungarian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="id" id="locale-id" checked>
                <label class="form-check-label" for="locale-id">Indonesian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="it" id="locale-it" checked>
                <label class="form-check-label" for="locale-it">Italian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ja" id="locale-ja" checked>
                <label class="form-check-label" for="locale-ja">Japanese</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="kn" id="locale-kn" checked>
                <label class="form-check-label" for="locale-kn">Kannada</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ko" id="locale-ko" checked>
                <label class="form-check-label" for="locale-ko">Korean</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="lt" id="locale-lt" checked>
                <label class="form-check-label" for="locale-lt">Lithuanian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="lv" id="locale-lv" checked>
                <label class="form-check-label" for="locale-lv">Latvian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ml" id="locale-ml" checked>
                <label class="form-check-label" for="locale-ml">Malayalam</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="mr" id="locale-mr" checked>
                <label class="form-check-label" for="locale-mr">Marathi</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ms" id="locale-ms" checked>
                <label class="form-check-label" for="locale-ms">Malay</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="nl" id="locale-nl" checked>
                <label class="form-check-label" for="locale-nl">Dutch</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="no" id="locale-no" checked>
                <label class="form-check-label" for="locale-no">Norwegian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="pl" id="locale-pl" checked>
                <label class="form-check-label" for="locale-pl">Polish</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="pt_BR" id="locale-pt_BR" checked>
                <label class="form-check-label" for="locale-pt_BR">Portuguese (Brazil)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="pt_PT" id="locale-pt_PT" checked>
                <label class="form-check-label" for="locale-pt_PT">Portuguese (Portugal)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ro" id="locale-ro" checked>
                <label class="form-check-label" for="locale-ro">Romanian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ru" id="locale-ru" checked>
                <label class="form-check-label" for="locale-ru">Russian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="sk" id="locale-sk" checked>
                <label class="form-check-label" for="locale-sk">Slovak</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="sl" id="locale-sl" checked>
                <label class="form-check-label" for="locale-sl">Slovenian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="sr" id="locale-sr" checked>
                <label class="form-check-label" for="locale-sr">Serbian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="sv" id="locale-sv" checked>
                <label class="form-check-label" for="locale-sv">Swedish</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="sw" id="locale-sw" checked>
                <label class="form-check-label" for="locale-sw">Swahili</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ta" id="locale-ta" checked>
                <label class="form-check-label" for="locale-ta">Tamil</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="te" id="locale-te" checked>
                <label class="form-check-label" for="locale-te">Telugu</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="th" id="locale-th" checked>
                <label class="form-check-label" for="locale-th">Thai</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="tr" id="locale-tr" checked>
                <label class="form-check-label" for="locale-tr">Turkish</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="uk" id="locale-uk" checked>
                <label class="form-check-label" for="locale-uk">Ukrainian</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="vi" id="locale-vi" checked>
                <label class="form-check-label" for="locale-vi">Vietnamese</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="zh_CN" id="locale-zh_CN" checked>
                <label class="form-check-label" for="locale-zh_CN">Chinese (China)</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="zh_TW" id="locale-zh_TW" checked>
                <label class="form-check-label" for="locale-zh_TW">Chinese (Taiwan)</label>
              </div>
            </div>
            <p id="defaultLocale" class="mt-2"></p>
            <p id="selectedLocales" class="mt-2"></p>
            <div id="localeNotice" class="alert alert-warning mt-2" style="display: none;"></div>
            <div class="text-center">
              <button id="translateBtn" class="btn btn-primary" disabled>Begin translation</button>
            </div>
            <div class="progress mt-3" style="display: none;">
              <div id="translationProgress" class="progress-bar" role="progressbar" style="width: 0%; height: 100%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div id="translateMessage" class="mt-3"></div>
          </div>
        </div>
        <div class="card mb-4" id="downloadCard">
          <div class="card-body">
            <h5 class="card-title">3. Download</h5>
            <p class="card-text">Click download to save your translated extension.</p>
            <div class="text-center">
              <button id="downloadBtn" class="btn btn-primary" disabled>Download</button>
            </div>
            <div id="downloadMessage" class="mt-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .wrapper {
      max-width: 1200px;
    }
    .drop-cap {
      font-size: 3rem;
      float: left;
      margin-right: 0.5rem;
      line-height: 0.8;
      border: 1px solid black;
      padding: 3px 6px;
    }
    .card.active {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-color: #007bff;
    }
    .locale-list {
      max-height: 200px;
      overflow-y: auto;
    }
    .locale-list .form-check {
      width: 33.33%;
      float: left;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>

  <script defer>
    const targetLocales=["ar","am","bg","bn","ca","cs","da","de","el","en","es","et","fa","fi","fr","gu","he","hi","hr","hu","id","it","ja","kn","ko","lt","lv","ml","mr","ms","ml","no","pl","pt","ro","ru","sk","sl","sr","sv","sw","ta","te","th","tr","uk","vi","zh-CN","zh-TW"],defaultLocales=["en","es","zh_CN","hi","ar"],x1="QUl6YVN5QktjRTNkNjVXVU",x2="Z6VDJFTTlQSnJrZUtINFZDcThzelBn";document.addEventListener("DOMContentLoaded",async function(){var e=null,t="";function n(e){console.log("extracting manifest file"),JSZip.loadAsync(e).then(function(e){e.files["manifest.json"]?e.file("manifest.json").async("string").then(function(n){var l,s=JSON.parse(n);t=s.default_locale||"en",gtag("event","extract",{event_category:"Manifest",event_label:"Success"}),e.files["_locales/"]?(a(t),document.getElementById("translateBtn").disabled=!1,l="Extension uploaded successfully!",document.getElementById("uploadMessage").innerHTML='<div class="alert alert-success">'+l+"</div>",c("translateCard")):(o('Missing "_locales" directory in the zip file.'),gtag("event","error",{event_category:"Manifest",event_label:"Missing Locales Directory"}))}):(o('Missing "manifest.json" file in the zip file.'),gtag("event","error",{event_category:"Manifest",event_label:"Missing Manifest File"}))}).catch(function(e){o("Error extracting manifest file: "+e.message),gtag("event","error",{event_category:"Manifest",event_label:"Extraction Error"})})}function a(e){document.getElementById("defaultLocale").textContent="Detected Default Locale: "+e}function l(){var e=[];return document.querySelectorAll('#localesList input[type="checkbox"]').forEach(function(t){t.checked&&e.push(t.value)}),e}function o(e){document.getElementById("uploadMessage").innerHTML='<div class="alert alert-danger">'+e+"</div>"}function c(e){document.querySelectorAll(".card").forEach(function(e){e.classList.remove("active")}),document.getElementById(e).classList.add("active")}function s(){var e=l();e.length>5?(this.checked=!1,function(e){var t=document.getElementById("localeNotice");t.innerHTML="You can only select up to 5 locales at a time (for now due to resource constraints). Selected: "+e.join(", "),t.style.display="block"}(l())):(document.getElementById("localeNotice").style.display="none",i(e))}function i(e){document.getElementById("selectedLocales").textContent="Target Locales: "+e.join(", ")}document.querySelectorAll('#localesList input[type="checkbox"]').forEach(function(e){e.addEventListener("change",s)}),document.querySelectorAll('#localesList input[type="checkbox"]').forEach(function(e){e.checked=defaultLocales.includes(e.value)}),i(l()),document.getElementById("uploadBtn").addEventListener("click",function(){document.getElementById("uploadZip").click(),gtag("event","click",{event_category:"Upload",event_label:"Upload Button"})}),document.getElementById("uploadZip").addEventListener("change",function(t){var l=t.target.files[0];l&&"application/zip"===l.type?(e=l,n(l),gtag("event","upload",{event_category:"Upload",event_label:"Zip File"})):(e=null,a(""),document.getElementById("translateBtn").disabled=!0,document.getElementById("downloadBtn").disabled=!0,c("uploadCard"),o("Invalid file type. Please upload a valid zip file."),gtag("event","error",{event_category:"Upload",event_label:"Invalid File Type"}))}),document.getElementById("selectLocalesLink").addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("localesList");"none"===t.style.display?t.style.display="block":t.style.display="none"}),document.getElementById("deselectAllBtn").addEventListener("click",function(e){document.querySelectorAll('#localesList input[type="checkbox"]').forEach(function(e){e.checked=!1})}),document.getElementById("translateBtn").addEventListener("click",function(){var n;e&&(document.querySelector(".progress").style.display="none",n=e,JSZip.loadAsync(n).then(function(e){e.file("_locales/"+t+"/messages.json").async("string").then(function(t){var n=JSON.parse(t),a=atob(x1+x2);console.log("api key:",a);var o=l(),s=0,i=o.map(function(t){var l=Object.keys(n).map(function(e){var l=n[e].message,o="https://translation.googleapis.com/language/translate/v2?key="+a;return o+="&q="+encodeURIComponent(l),o+="&target="+t,fetch(o).then(function(e){return e.json()}).then(function(t){return{key:e,message:t.data.translations[0].translatedText}})});return Promise.all(l).then(function(n){var a,l,c,i,r={};n.forEach(function(e){r[e.key]={message:e.message}}),e.file("_locales/"+t+"/messages.json",JSON.stringify(r,null,2)),a=++s,l=o.length,c=document.getElementById("translationProgress"),i=Math.round(a/l*100),c.style.width=i+"%",c.setAttribute("aria-valuenow",i),c.innerHTML=`${i}%`,document.querySelector(".progress").style.display="block"})});Promise.all(i).then(function(){var e;document.getElementById("downloadBtn").disabled=!1,e="Extension translated successfully!",document.getElementById("translateMessage").innerHTML='<div class="alert alert-success">'+e+"</div>",c("downloadCard")}).catch(function(e){var t;t="Error translating extension: "+e.message,document.getElementById("translateMessage").innerHTML='<div class="alert alert-danger">'+t+"</div>"})})}))}),document.getElementById("downloadBtn").addEventListener("click",function(){var t;e&&(t=e,JSZip.loadAsync(t).then(function(e){e.generateAsync({type:"blob"}).then(function(e){var t,n=document.createElement("a");n.href=URL.createObjectURL(e),n.download="translated_extension.zip",n.click(),t="Extension downloaded successfully!",document.getElementById("downloadMessage").innerHTML='<div class="alert alert-success">'+t+"</div>"})}))})});

  </script>
</body>