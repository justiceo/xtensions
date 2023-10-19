---
layout              : extension
permalink           : /extension-starter
title               : Extension Starter Kit
description         : Browser extension example. Typescript, E2E tests, icon generation, automatic i18n and ESBuild
created_date        : 2020-4-17
chrome_id           : 
website             : 
github_repo         : https://github.com/essentialkit/xtension
feedback_url        : 
logo_128            : /assets/imgs/xtension-logo-128x128.png
published           : false

# Preferably a GIF showing how the extension works.
hero_image          : /assets/imgs/xtension-screenshot1.png

# These would be displayed in a carousel and should showcase the different UIs of the extension.
screenshots:
  - /assets/imgs/xtension-screenshot1.png

show_on_homepage    : false
content_class       : xtension
ratings             : 
active_users        : 

# For icons, see https://fonts.google.com/icons
features            :
  - title           : Float it! Drag it! Resize it!
    description     : Move and squeeze this calculator into any corner of the page for convenient access.
    icon_name       : pinch
    
  - title           : Basic and Advanced Calculations
    description     : Perform all calculations, from simple to complex, with ease and accuracy..
    icon_name       : calculate

  - title           : History Log
    description     : Keep track of your calculations and reuse them with one click.
    icon_name       : history

  - title           : Open as popup window
    description     : Open the calculator in a standalone popup window or new tab when page-insertion is not possible.
    icon_name       : tab

  - title           : Unit conversions
    description     : Perform simple conversion on time, weight, distance etc by typing it, as in 100lbs to kg. 
    icon_name       : price_change


faqs                :
  - title           : Does it work on other webkit browsers like Edge, Opera, Brave?
    description     : Yes it should, though I have not verified.
    id              : one

---



### Features
* **Automatic Github Pages generation**: Files added in the `gh-pages` sub-directory are branched to create a Github page automatically. This is useful for static pages like help, welcome and feedback pages.
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.
* **Manifest V3 Compatible**: Easier submission to the Chrome Webstore.
* **Automatic translation**: The messages for all supported i18n locales are auto-generated from the English version.
* **Zero Dependencies**: This starter is minimal to avoid [supply-chain attacks](https://www.bleepingcomputer.com/news/security/npm-supply-chain-attack-impacts-hundreds-of-websites-and-apps/) which is rampant with Js projects.
* **Welcome and Uninstall pages**: To give your project a head start, welcome pages are great for demos and uninstall pages provide a thoughtful exit.
* **Utilities for common tasks**: Comes with helpers logging, storage, and requesting feedback.

