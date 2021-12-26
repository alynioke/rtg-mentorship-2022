## How page looks like


https://user-images.githubusercontent.com/528887/147421739-47aa69e7-1ee8-40fb-b461-be5efc1ab16e.mov


## Homework for mentees
Let's formulate it here, then it will be pasted to their slack

### To do:

- In quote section, put a link for "Susan Wojcicki" that will lead to her wikipedia article. Style the link to have bright pink color.
- Use RTG font for everything on the page. Instructions:
  - [How to install & use it](https://developers.google.com/fonts/docs/getting_started)
  - [RTG font](https://fonts.google.com/specimen/PT+Mono#standard-styles)
- Read what are lists and items in HTML [must insert good link here?]. Apply unordered list in HTML to FAQ answer for "We have mentors representing 12 tracks:" - for each track name to be a list item.
- After quote section, instead new section:
  - dark blue backgorund
  - white color of font
  - it should contain links of RTG facebook, instagram, youtube, linkedin
- [More advanced point? Not sure what]

### To train/read

- Try playing game [flexbox froggy](https://flexboxfroggy.com/) to understand more about how to build layouts with CSS
- Inspect [existing RTG mentorship webpage](http://www.rigatechgirls.com/mentorship2022) - find some elements you like, or styles. Then inspect with Chrome DevTools & try to apply some things to your own webpage. As example, you can see how images are made links in "Contact us" block at the very bottom.

## Some points about code for lecturers

To everyone: Not using semantical html in this lecture (e.g. sections, headings) because:

- wanna keep things easier, 'div' & 'span' are enough for lecutre #1
- gotta leave something for a11y lecture to improve on

To Laura: please show chrome dev tools! Very important.

To Laura: Box-model - margin/padding/size - must be explained.

To Laura: you gotta share background image in some easy way with mentees, consider using ej.uz

To everyone: THINGS WE WON'T USE AND DON'T NEED:

- BEM (use simple names for classes)
- media queries (won't cover at all in whole course)
- CSS shorthands. Please use full, e.g. instead of margin: 20px use margin-left: 20px, etc. for verbosity while learning
- flexbox should be used but don't spend time digging into logic (it will their be homework)
- position: relative/absolute
- styling via tag names or IDs in CSS. Instead, always use classes.

⚠️ To everyone:
FAQ part is where collaboration (especially JS/React) should happen. Martins came up with idea to create [accordeon effect](https://www.w3schools.com/howto/howto_js_accordion.asp) with JS on his lecture. This idea in my opinion is perfect, because:
1) accordeon lets you improve UI - with it, UI is cleaner, more concise, as unnecessary answers are hidden. So it's realistic improvement.

Also, this idea lets Martins to have a good use case:

2) to introduce data structres in JS lecture - all FAQ texts can be hidden in a variable that is array of objects. 
3) to introduce loops and concept of DOM - iterate over FAQ structure in JS and generate html to push into DOM.

4) Then, FAQ item should be the item Ruta will work with too - it should be extracted into React component (i know other parts also can be extracted, but let's start from accordeon specifically). And in React, loop from JS gonna turn to {FAQitems.map(...<FAQitem >...)} or smth in JSX. 
