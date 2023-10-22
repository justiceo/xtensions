---
layout              : extension
permalink           : /search-and-link-previews
title               : Search & Link Previews
description         : A browser extension for previewing links and search results without opening new tabs.
created_date        : 2023-01-01
chrome_id           : mmmfofondapflhgbdidadejnechhjocm
website             : https://betterpreviews.com
github_repo         : https://github.com/essentialkit/link-previews
feedback_url        : https://forms.gle/DtfV94iG4oqXQFFo9
logo_128            : /assets/demos/search-preview/assets/logo-128x128.png

# These would be displayed in a carousel and should showcase the different UIs of the extension.
screenshots:
  - /assets/demos/search-preview/assets/screenshot2.jpeg
  - /assets/demos/search-preview/assets/search-preview-too-many-tabs.webp

show_on_homepage    : true
content_class       : search-preview
ratings             : 4.88
active_users        : 1K+
demo_content        : |
  <div class="search-preview-demo">
    <link rel="stylesheet" href="/assets/demos/search-preview/content-script/content-script.css">
    <script async defer src="/assets/demos/search-preview/content-script/content-script.js"></script>

    <h3>Live demo</h3>

    <img src="/assets/imgs/search-tooltip.png">

    <p class="notice">
      Note:<br>Several features (including certain URL previews) of this extension may not work in this demo due to inability to access the relevant Chrome Extension APIs / UIs from a page context.        
    </p>
      
    <p>You can trigger and update the demo (floating panel) by selecting text and clicking "Search".</p>
    <p>You can trigger the preview functionality by hovering over a link like this <a href="https://en.wikipedia.org/wiki/ChatGPT">Wikipedia article on ChatGPT</a>.</p>
  </div> 

  <script>
    window.addEventListener("load", (event) => {
        window.postMessage(
          { application: "better-previews", action: "search", data: "Generative AI", mode: "demo" },
          window.location.origin
        );
    });
  </script>

# For icons, see https://fonts.google.com/icons
features            :
  - title           : Keep fewer tabs open
    description     : No need to open a new tab just to check the definition of <em>Floccinaucinihilipilification</em>. Highlight it and click "search".
    icon_name       : mop
    
  - title           : Browse faster
    description     : It can premptively load search result pages for an almost instantenous view of websites.
    icon_name       : rocket

  - title           : Quick actions
    description     : Beyond search, the extension provides quick actions like "copy" and "email" based on the selection context
    icon_name       : apps

  - title           : Privacy friendly
    description     : We do not store or transfer your search or browsing history. What happens in your browser stays in your browser.
    icon_name       : lock

  - title           : Highly accessible
    description     : The preview pane can be dragged, resized, minimized, expanded into a full tab and a whole lot more. 
    icon_name       : accessibility_new
  
  - title           : Open source
    description     : The source code is freely available on Github, with how-to-use instructions. No ads, no sign-ups, no bs.
    icon_name       : redeem

  - title           : Popular search engines
    description     : You can choose from Google to Bing, Baidu, Yandex, Yahoo, DuckDuckGo and Ecosia.
    icon_name       : mode_heat

  - title           : Over 50 locales supported
    description     : You may use the extension in any of the global languages supported by Chrome.
    icon_name       : globe


faqs                :
  - title           : Does it work on other webkit browsers like Edge, Opera, Brave?
    description     : Yes it should, though I have not verified.
    id              : one


---

This is my solution to the too-many-open-tabs problem. Opening a new tab is easy, closing it is hard. This extension helps by showing links and search results in a preview pane inside the current tab, that way I don't have to open a new tab in the first place.

It could start with me reading [List of investors killed by their own invention](https://en.wikipedia.org/wiki/List_of_inventors_killed_by_their_own_invention), then 17 open tabs later, I find myself on [Donner Party](https://en.wikipedia.org/wiki/Donner_Party). 