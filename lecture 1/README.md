# Instructions to create simple HTML/CSS webpage

Let's imagine you already work as frontend developer! Process below is very similar to what I do everyday at workplace.

## 1. Creating a basic webpage as in lecture

Imagine, you are approached by Riga TechGirls manager and asked to create a mentorship webpage. Or maybe you're approached by animal shelter? Or vegan cafe? You can choose the theme yourself! Images, links & texts — it's up to you what content you will put. Be creative or stick to mentorship theme — up to you! 

Regular work of frontend developer starts with seeing end result — a design. A designer provides an image to frontend developer, and developer starts thinking how to turn this image into the code. We need HTML/CSS as a base, on top of that we later create interactivity (with JavaScript). 

Here is what Riga TechGirls designer provided you:
* [Design](https://drive.google.com/file/d/1yZ8MJEHJq2Sc6rnEaAcTjjNVzlKdvm56/view?usp=sharing). Note: "APPLY" button is a link that should redirect to mentorship website. Buttons have "hover" effect. Usually design is shared not as simple image, but as a file in figma, photoshop, sketch — that are special apps to view designs. 
*  Usually it's not shared, but for your convenience I added also [Video demo](https://drive.google.com/file/d/12ZvKiaxh89W2gZdwhCicAqi9LtUUYmvP/view?usp=sharing) to see page interactively (buttons pressed, video turned on, how background is scrolled nicely). 

Usually, developers can see exact values of all sizes for spacings, font sizes, image sizes and color codes for backgrounds in design app. But now, you don't need to do all precisely! Explore new colors, mark spacings by eye in pixels — build your own! It's okay if it will not be pixel perfect. But if you want some basics to start with, here it is:
- pink: `#ff3980` 
- dark blue: `#191635` 
- font sizes: `20px`, `25px`, `30px`, `45px` (biggest one only for main heading)
- [background image](https://github.com/alynioke/rtg-mentorship-2022/blob/main/lecture%201/classwork/background.jpg?raw=true)


### Start coding
1) Ensure you have [Chrome browser](https://www.google.com/chrome/?brand=BNSD&gclid=CjwKCAiAxJSPBhAoEiwAeO_fP8dukSJSd-XKZdK7UZF2ELecgyMJtr3iEwQhixfJXlnGr9ghvFlHnhoCTdAQAvD_BwE&gclsrc=aw.ds)
2) Install [VSCode IDE](https://code.visualstudio.com/docs/setup/setup-overview) (environment where we will write and edit code) 
3) Create a folder on your computer for the project, for example `mentorship-website` folder on Desktop
4) Create `index.html` file inside `mentorship-website` folder 
5) Create `styles.css` files inside `mentorship-website` folder 
6) Open project folder with both files with VSCode
7) In `index.html`, create basic "HTML skeleton" — a minimal structure to start coding (Laura mentions it in lecture)
8) Link CSS file to your HTML file (Laura mentions it in lecture)
9) What developers (not just frontend) do a lot is getting a big task, and splitting it into smaller tasks. It's a very important skill! You should do same here. Split webpage into 5 sections (each sections is `<div>` which will contain more HTML inside).  
    - Intro slide
    - Button learn more
    - Frequently Asked Questions
    - Video
    - Quote 
10) Look at the design, and try to create ± same using HTML & CSS for each block.
11) If you don't know how to do something — do research, use Google!


### Resources to help you
Those points you can do before starting coding, or while you code.
- [HTML reference](https://www.w3schools.com/html/html_intro.asp) — explore links on the left side, to learn more about what tags you can use ( 
- [CSS reference](https://www.w3schools.com/css/css_intro.asp) — explore links on the left side, to learn how you can style with CSS
- View [“Get started with Visual Studio Code”](https://www.youtube.com/watch?v=S320N3sxinE&ab_channel=VisualStudioCode)
- This material tells how to build layouts (structure of the webpage): [guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Try playing game [flexbox froggy](https://flexboxfroggy.com/)
- Inspect [RTG mentorship webpage](http://www.rigatechgirls.com/mentorship2022) with Chrome DevTools (right click on page + choose "Inspect"). See how some elements you like looks like in HTML/CSS. Try to apply some things to your own webpage.


## 2. Homework - adding things on top of basic website

Congrats, you made a basic webpage! However, project manager of Riga TechGirls said that it is not enough (this happens a lot in real life, trust me). So designer updated a design and provided you another image. You need to do extra things to make your webpage more informative and good looking!
* [New design](https://drive.google.com/file/d/1ntVdYBhNUApTdzbx7-KYzuWf0v0lclkI/view?usp=sharing)
* [New video demo](https://drive.google.com/file/d/1XKIVe_Nz5i73OxnPKAGwgECqJ5002eGk/view?usp=sharing)

Manager gave you this list of tasks for you to know exactly what to do. Usually such tasks are written in some task management tool, like JIRA or Trello or Asana. But now we just have a list here:
1) Change background image of intro slide, its size (make it smaller) and opacity (make it a bit transparent, eg 85%)
2) Change font family for the whole page (download any different google font you like). [How to install & use font.](https://developers.google.com/fonts/docs/getting_started)
3) Add 2 more questions and answers in FAQ section, once you hover on those with mouse - make the text in question and answer underlined
4) Show Video title ‘Watch the closing event of TechMentor 2021’ below the video without changing HTML
5) Add sticky/fixed footer at the bottom of viewport with your initials who created this page (you could add background colour, links or anything you want here as well)
6) Read what are lists and items in HTML. Apply “unordered list” in HTML to FAQ answer for "We have mentors representing 12 tracks:" - for each track name to be a list item.
7) In quote section, put a link for "Susan Wojcicki" that will lead to her wikipedia article. Style the link to have bright pink color.
8) After video section, add new section:
    - dark blue backgorund
    - white color of font
    - it should contain links of RTG facebook, instagram, youtube, linkedin
9) When you press “LEARN MORE” button, scroll is very fast. Make a smooth scroll with CSS.
10) Come up with idea of new page and code it up.
    - Page should have at least 2 big blocks + same footer as on main page (you can browse existing RTG website or mentorship website for inspiration).
    - New HTML page should have same font as old one.
    - It should have new CSS file attached to it (this way code will be clearer).
    - Create a link on main page that will open page #2.
    - Create a link on page #2 that will lead back to main page

In real life, if you don't understand the task — you ask manager who gave you task for details. So if something is unclear — ask me (Alina) :) 

---------------

If something goes very wrong and you are stuck in repeating lecture material — you can see end result in [classwork folder](https://github.com/alynioke/rtg-mentorship-2022/tree/main/lecture%201/classwork). If issues appear when you're doing homework — you can check code in [homework folder](https://github.com/alynioke/rtg-mentorship-2022/tree/main/lecture%201/homework). I encourage you not to copy paste everything from there — after all, in real life, there will be no folder with solutions! So use results only when really stuck and googling didn't help. And as Laura said, "practice brings confidence" — so I hope that you will practice!

