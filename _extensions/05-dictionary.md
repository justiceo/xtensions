---
layout              : extension
permalink           : /dictionary
title               : Dictionary
description         : A modern, comprehensive dictionary for all languages
created_date        : 2023-04-01
chrome_id           : nhbchcfeodkcblfpdjdhelcfbefefmag
website             : https://e-dictionary.org
github_repo         : https://github.com/essentialkit/e-dictionary
feedback_url        : https://forms.gle/oRACFiJQCZW77Ssu8
logo_128            : /assets/demos/dictionary/assets/logo-128x128.png

# These would be displayed in a carousel and should showcase the different UIs of the extension.
screenshots:
  - /assets/demos/dictionary/assets/screenshot.jpeg
  - /assets/demos/dictionary/assets/screenshot2.jpeg
  - /assets/demos/dictionary/assets/screenshot3.jpeg

show_on_homepage    : false
content_class       : dictionary
ratings             : 5
active_users        : 4K+
demo_content        : '<img src="/assets/demos/dictionary/assets/screenshot.jpeg">'
xdemo_content_old    : |
  <div class="dictionary-demo">
    <link rel="stylesheet" href="/assets/demos/dictionary/content-script/content-script.css">
    <script async defer src="/assets/demos/dictionary/content-script/content-script.js"></script>

    <h3>Live demo</h3>

    <img src="/assets/demos/dictionary/assets/screenshot.jpeg">

    <p class="notice">
      Note:<br>Several features of this extension may not work in this demo due to inability to access the relevant Chrome Extension APIs / UIs from a page context.        
    </p>
      
    <p>You can trigger and update the demo (floating panel) by selecting text and clicking "Search".</p>
    <p>You can trigger the preview functionality by hovering over a link like this <a href="https://en.wikipedia.org/wiki/ChatGPT">Wikipedia article on ChatGPT</a>.</p>
  </div> 

  <script>
    window.addEventListener("load", (event) => {
      console.log("showing dictionary demo");
        window.postMessage(
          { application: "dictionary", action: "define", data: "Generative AI", mode: "demo" },
          window.location.origin
        );
    });
  </script>

# For icons, see https://fonts.google.com/icons
features            :
  - title           : Get there faster
    description     : No need to open a new tab just to check the definition of <em>Floccinaucinihilipilification</em>. Double click it and voila!
    icon_name       : mop

  - title           : Pronounciation guides
    description     : You can listen to how the word is pronounced. The phonetics are also displayed. 
    icon_name       : accessibility_new

  - title           : Over 50 locales supported
    description     : You may use the extension in any of the global languages supported by Chrome.
    icon_name       : globe


faqs                :
  - title           : Does it work on other webkit browsers like Edge, Opera, Brave?
    description     : Yes it should, though I have not verified.
    id              : one


---


The internet is a melting pot of languages, which makes a Dictionary (+ thesarus) a handy tool for netizens. The browser extension resulting from this supports:

* Showing the varying definitions of the given word in different contexts.
* Pronounciation guide in audio format.
* Real-world usages of the word in sentences.
* Complex words used in the definition are hyperlinked.
* Support for all the major languages of the world from Arabic to German.
* A thesarus of synonyms and antonyms.

Under the hood, the extension is using Google's dictionary API, which in turn integrates with major dictionary providers around the world like Oxford. I estimate that there are over a 100 dictionary extensions on the Chrome Webstore, and I hope this is the alternative you're looking for.

Here is a list of languages supported:
 - Arabic
 - Brazilian Portuguese
 - Chinese (Simplified)
 - Chinese (Traditional)
 - Czech
 - Dutch
 - English (UK)
 - English (US)
 - French
 - German
 - Hindi
 - Italian
 - Japanese
 - Korean
 - Russian
 - Slovak
 - Spanish
 - Turkish