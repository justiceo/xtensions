---
layout              : extension
permalink           : /voice-search
title               : Voice Search
description         : Voice Search enables you to search the web using your voice 🗣️, simply by clicking on the extension icon.
created_date        : 2020-4-17
chrome_id           : agmgoemhckhccgibmoigonndjhjllcoh
website             : https://audate.app
github_repo         : https://github.com/audateapp/voice-search
feedback_url        : https://forms.gle/DuMbMQ76caFQee3z6
logo_128            : /assets/imgs/voice-search-logo-128x128.png

# Preferably a GIF showing how the extension works.
hero_image          : /assets/imgs/voice-search.jpeg

# These would be displayed in a carousel and should showcase the different UIs of the extension.
screenshots:
  - /assets/imgs/voice-search.jpeg
  - /assets/imgs/voice-search.jpeg

show_on_homepage    : true
content_class       : voice-search
ratings             : 5.0
active_users        : 11K+
demo_content        : |
  <div style="display: flex; background: #eee; padding: 20px">
    <iframe src="/assets/demos/audate/index.html#popup?demo=true" width="250" height="535" style="border: 1px solid #aaa; border-radius: 8px; overflow: hidden;"></iframe>
    <div style="text-align: left; margin-left: 30px">
      <h3>Live demo</h3>
      <p style="background-color: lightyellow; padding: 20px; border-radius: 8px; border: 1px solid #ddd">
        Note:<br>Some features of this extension may not work in this demo due to inability to access the relevant Chrome Extension APIs from a page context.
        <br><br>Microphone permission is required for the demo, clicking the ⓞ button would trigger permission request.
      </p>
      
      <p>The demo on the left can give you an idea of what to expect when you install the extension.</p>
      <p>In actual use, this UI would open as a popup when the extension icon is clicked.</p>
      <p>You can speak your search in any of the 300+ locales supported by the Chrome STT engine.</p>
    </div>
  </div>

# For icons, see https://fonts.google.com/icons
features            :
  - title           : Voice is Faster
    description     : “You can speak 110-150 words per min, as opposed to avg person's typing 38-40 wpm” - @purnavirji
    icon_name       : rocket
    
  - title           : More ergnonomic
    description     : “Repetitive motions like typing… that you do over and over can bring about carpal tunnel syndome” - WebMd.
    icon_name       : weekend

  - title           : Privacy friendly
    description     : All speech-recognition happens in your browser, we do not store or transfer any audio.
    icon_name       : lock

  - title           : Natural & Expressive
    description     : Voice queries are longer and return more featured snippets than typed queries - Google Search.
    icon_name       : child_care

  - title           : Highly accessible
    description     : Using a keyboard with an unfamiliar layout/type? Not literate in English? Get onboard! 
    icon_name       : accessibility_new
  
  - title           : Open source
    description     : The source code is available on Github - https://github.com/AudateApp/voice-search-extension. No ads, no sign-ups, no bs.
    icon_name       : redeem

  - title           : Popular search engines
    description     : You can choose from Google to Bing, Baidu, Yandex, Yahoo, DuckDuckGo and Ecosia.
    icon_name       : mode_heat

  - title           : Over 300 locales supported
    description     : For each language, you can choose a country-specific dialect for high-accuracy recognition.
    icon_name       : globe

  - title           : State of the art AI
    description     : Automatically detects an ignores music, noise. Detects active mic and when you stop speaking.
    icon_name       : robot

  - title           : # New Feature Title
    description     : # New Feature Description
    icon_name       : # Enter Font Awesome icon name (e.g. star). Find icons on fontawesome.com/icons.


faqs                :
  - title           : Does it work on other webkit browsers like Edge, Opera, Brave?
    description     : It does not.
    id              : one

  - title           : Why can't I change the microphone?
    description     : On some OS (windows precisely), the recognition engine uses the system default microphone.
    id              : two


---

When compared to typing, voice search is 3x faster, far more ergonomic (no more wrist pains) and the queries are more natural and expressive. I think the main reason typing is more popular than speaking is because the keyboard preceded the microphone, and it took long for speech-to-text software to reach the point of understanding accents. It's about time we reversed the statistic!