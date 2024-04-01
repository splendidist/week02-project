# week02-project

🍪 Catisserie Clicker

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

For this assignment I:

- designed a wireframe including the main game sections
- built out some of the wireframe using HTML and CSS
- added a cookie and styled buttons
- added event listeneres to the buttons to increment the cookie counter and cookies per second
- added a CSS animation when the buttons are clicked
- used local storage to store the cookie count and cps values
- added an event listener for each upgrade button to allow cps to be bought with cookies
- added some personal styling
- added a reset game button

🎯 Were there any requirements or goals that you were not quite able to achieve?

Some personal goals that I was not able to achieve include

- giving the user the ability to name the cats
- having readable large numbers displayed with commas (e.g 100,000 rather than 100000)
- larger shop/more upgrades
- unlocking the upgrades with cookies rather than cps (the upgrades would reset when page reloads)
- responsive page

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

I found understanding the local storage the most difficult part of this task, and this stopped me from implementing some features that I wanted to add (e.g custom cat names, unlocking the upgrades with cookies etc.). Another thing I found difficult was figuring out what order each piece of my Javascript code needed to be in order for everything to work.

🍪 What went really well and what could have gone better?

I was able to style the page with flexbox a lot easier on this project, and successfully made functions to let the user buy upgrades and make cookies. I also successfully made a reset button so that the user can reset the game.

🍪 Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

Animate buttons - https://www.w3schools.com/howto/howto_css_animate_buttons.asp
Disable/enable buttons - https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
Style background image in Javscript - https://www.shecodes.io/athena/51886-how-to-change-the-background-image-in-javascript
Rounded corners - https://www.w3schools.com/css/css3_borders.asp
Select by class in Javascript - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
Custom cursor - https://blog.logrocket.com/creating-custom-mouse-cursor-css/

🍪 Describing errors or bugs you encountered while completing your assignment.

Bug - When I had my upgrade buttons unlock using cookies (e.g 100 cookies unlocks upgrade 2), my code would say: if cookies >= 100, upgrade button disabled = false. However, when the cookies fall below 100 and the page is refreshed, this upgrade would then be disabled again. I temporarily fixed this by having the upgrade button unlock when cps reaches 100, as this number never decreases.

Another Bug - When the page refreshes the enabled upgrade buttons show the cat carrier and then 1 second later the new enabled image.

🍪 Requesting feedback about a specific part of your submission.

Could I get some feedback about the upgrade buttons flashing on reload, and also my resetGame and unlock upgrade functions - is there a simpler was to do this than repeating code for each button?
