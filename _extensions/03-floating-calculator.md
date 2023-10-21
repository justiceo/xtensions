---
layout              : extension
permalink           : /scientific-calculator
title               : Floating Scientific Calculator
description         : A floating scientific calculator anywhere you need it
created_date        : 2020-4-17
chrome_id           : mbfnbhfjnjeedaknilkfegfnnmmmmpmn
website             : https://floatingcalc.com
github_repo         : https://github.com/essentialkit/floating-calculator
feedback_url        : https://forms.gle/GYbKGS8Wy1mbgEiU6
logo_128            : /assets/imgs/calculator-logo-128x128.png

# These would be displayed in a carousel and should showcase the different UIs of the extension.
screenshots:
  - /assets/imgs/calculator-screenshot1.png
  - /assets/imgs/calculator-screenshot2.jpeg

show_on_homepage    : true
content_class       : calculator
ratings             : 4.9
active_users        : 7K+
demo_content        : | # Preferably a GIF showing how the extension works.
  <div style="background: #eee; padding: 20px">
    <h3>Live demo</h3>
    <iframe src="/assets/demos/calculator/calc.html" width="600" height="400" style="border: 1px solid #aaa; border-radius: 8px; overflow: hidden;"></iframe>
    <div style="text-align: left;">
      
      <p style="background-color: lightyellow; padding: 20px; border-radius: 8px; border: 1px solid #ddd">
        Note:<br>Some features of this extension may not work in this demo due to inability to access the relevant Chrome Extension APIs / UIs from a page context.
      </p>
    </div>
  </div> 

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

Perform calculations right on top of your browser window without switching between tabs or apps or leaving your current page. Features a history log track of your calculations for future reference.