# Instructions to create dynamic open/close FAQ section

---

## Homework

![preview](/lecture_3/ezgif-2-c15692270e.gif)

### Beginner

- Additional styling for Question and Answer to indicate when user interacts with it

  - Use Chevron - CSS Chevron Used in example homework: [CodePen Chevron](https://codepen.io/stepher/pen/yLOaEOP)
  - When Question is closed
    - When hovered - the question should have #ff3980 border indicating it is hovered.
    - Chevron should point right.
    - Answer is hidden by CSS
  - When Question is opened
    - Chevron should point bottom.
    - Answer is visible by CSS
  - Answer should have left padding, to better highlight that this answer is the following question above.

- When a user clicks on an opened question - it closes.

- Close previous opened question if user clicks on new one.
  - Closes question if user clicks on it again.

### Intermediate

- Button that can open all questions at the same time.
  - Add Button above questions (either by JavaScript create element, or HTML).
  - When user clicks on button all answers switch to Open state and display answers
- Button that can close all questions at the same time

  - Add Button above questions (either by JavaScript create element, or HTML).
  - When user clicks on button all Answers switch to Closed state and hide answers

- Use helper functions for creating JavaScript elements, to simplify main code
  - Organize code in smaller and single purpose functions to simplify the main FAQ List code.

### Advanced

- Questions search bar by using [string.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) that shows only the matching questions.
  - Add Input field above FAQ,
  - When a user inputs text, perform array search if any of the questions/answers contain users text.
  - Display only matching Questions
  - Show All Questions when input is clear.
  - Add the “Clear” button, which clears the input field.
- Switch Language of FAQ

  - Modify FAQ Array

    - change `{question: 'text', answer: 'text'}` to `{en: {question: 'text', answer: 'text'}, de: {question: 'text', answer: 'text'}}`

  - Adjust existing code to support “en” language by default.
  - Add Two language buttons above FAQ - EN and DE,
  - When user clicks on Language button
    - Show Button as “ON” with #ff3980 background.
    - Pick selected translation from FAQ Array.
  - Do not show answers that do not include the selected language.

---

The three pillars of modern world WEB Development are HTML, CSS, and JavaScript.
If HTML adds structure and CSS adds flavour and style, then JavaScript brings the page to life.

Here are five whys of JavaScript:

## The five whys of JavaScript

### 1. Why JavaScript?

JavaScript was born out of necessity in year 1995 by NetScape developer. Initially called "Mocha". Fun fact: The initial version was created in just 10 days.

### 2. Why was JavaScript made by NetScape?

During Browser wars: NetScape vs Microsoft, NetScape were looking for an edge (pun not intended) over Microsoft in terms of served page and internet quality.

### 3. Why was JavaScript created?

To provide more value and support for served web pages. With JavaScript support from the NetScape, the browser was able to add interactive events to page improving readability and user experience that other browsers were not able to do at the time.

### 4. Why JavaScript got so popular to get adapted not only by Netscape but all common browsers?

JavaScript quickly gained popularity by being able to turn static pages in live interactive mediums for viewers, thus getting wildly adapted by all popular browsers and becoming house hold Web Development tool.

### 5. Why JavaScript keeps staying popular and one of top most used languages even today?

JavaScript is still undergoing rapid growth, and there are more supported features ever year. Allowing Developers to create complex and wonderful applications completely in your browser. No installation necessary, open URL and start editing document or spreadsheet, or stream a movie, or even play a game and chat with your friends.
To keep track of all changes versions are called EcmaScript. Currently most supported version is [EcmaScript 6](https://caniuse.com/?search=es6)

---

## Prerequisites & getting started

### Getting started Resources

- History
  - [The History of JavaScript: Everything You Need to Know](https://www.springboard.com/blog/data-science/history-of-javascript/)
- Youtube
  - [JavaScript Basics](https://www.youtube.com/playlist?list=PLpDGn9xs9oZnacBta9zmdYDr8yuVf09wF)
- Course

  - [Learn Programming Online](https://learnprogramming.online/)

### Most Commonly used resources related to our lecture

- [MDN Documentation on JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - one of best sources of information about JavaScript
- What is [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [How to link JavaScript file to HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- How to access DOM (HTML) elements
  - [By ID attribute](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  - [By ClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
  - [With query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - really handy, supports most of CSS selectors, even advanced ones
- What is [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- What is [EcmaScript](https://en.wikipedia.org/wiki/ECMAScript) and [Ecma6 Support](https://caniuse.com/?search=es6)
- What is ECMA6 syntax (currently used in lecture, there are many more)
  - [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- JavaScript and working with data (The bread and butter of JavaScript)
  - [Data types and Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
    - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
    - [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
    - [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
    - [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) functionality
    - Simple and advanced operator functions - like `Helper Functions` in our lecture
    - Event functions - like [OnClick](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) handler function for our FAQ Question title to allow user interact with content

---

## Good to know in future

- [History of EcmaScript](https://www.benmvp.com/blog/learning-es6-history-of-ecmascript/)
- What is event loop?
  - [Jake Archibald: In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
  - [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- Why is JavaScript single threaded and what does it mean?
  - [Memory Heap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
  - [If Javascript Is Single Threaded, How Is It Asynchronous?](https://dev.to/bbarbour/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd)
- [What is asynchronous functionality and what does Promise do?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [What is Typescript](https://www.typescriptlang.org/) - a flavor (superset) of JavaScript that adds types. Once you feel confident with JavaScript fundamentals, I highly recommend picking up Typescript, it is one of most popular superset of JavaScript improving code readability, transparency and maintainability. Fair warning - the learning curve is a steep, but rewarding.
- [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

🆘 If something goes very wrong and you are stuck in repeating lecture material — you can see end result in [classwork folder](https://github.com/alynioke/rtg-mentorship-2022/tree/main/lecture%201/classwork). If issues appear when you're doing homework — you can check code in [homework folder](https://github.com/alynioke/rtg-mentorship-2022/tree/main/lecture%201/homework). I encourage you not to copy paste everything from there — after all, in real life, there will be no folder with solutions! So use results only when really stuck and googling didn't help. And as Laura said, "practice brings confidence" — so I hope that you will practice!
