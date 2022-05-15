# Reading

### CSS global scope issue
Styling webpages has one huge issue - CSS is global. What does it mean? In our mentorship website, we have 2 buttons. One "LEARN MORE" button, 
and you have button in FAQ with text "APPLY". </br>
<img width="700" alt="image" src="https://user-images.githubusercontent.com/528887/163688960-219f387d-9413-40c2-b149-61908522be87.png">
 </br>
Now they have same class name - `button`. If I want to style second button differently, e.g. make it blue, what options do I have? 
I need to give them different class names. For example, first will be `button-intro` and second one `button-faq`. <br /> </br>
Problem solved! </br> </br>
But not really... Imagine we will have another button in video. We have to come up with another name 🤔 `button-video`, okay.
What if we'll have second button inside FAQ? `button-faq-2`?  </br> </br>
Imagine now huge website with many buttons. And not just buttons, but other elements. E.g. some "containers" and "images" etc. 
<br />
To style them differently, we constantly have to come up with different names. We can't use same names in regular CSS, 
even if they are written in different files (how we can achieve in Sass). If we will use same name, then latest definition will override all previous definitions. 
<br ><br>
So that's the issue of global scope. 
<br ><br>
In moders frontend, there are various ways to deal with that. Some of them rely on agreements between developers (like BEM),
some rely on technology (like CSS modules). I'd like you to get acquainted with those approaches, that solve CSS global scope issue:
<br >
* [What is BEM and how it nicely aligns with Sass](https://andrew-barnes.medium.com/bem-and-sass-a-perfect-match-5e48d9bc3894)
* [CSS Modules](https://glenmaddern.com/articles/css-modules)
* [Styled components](https://dev.to/coderamos/styled-components-and-their-benefits-33ag) - they also solve some other problems

If you'll find resources that speak better on those topics, please create a pull request to this repository, and suggest the changes! 

### Packages
We learned how lazy developers don't wanna write too much of code and won't lose the change to use someone elses code 😏 
But with reliance on someone else's code we might lose security or autonomy 🤔 Read those 2 fantastic stories to understand more about package eco-system: 
* [How one programmer broke the internet by deleting a tiny piece of code](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/) - this actually happened real-time when I was at work, I remember the panic everyone had! 
* ["I’m harvesting credit card numbers and passwords from your site. Here’s how."](https://medium.com/hackernoon/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5) - this one is freaky! It's OK if you won't get details which are mentioned, just follow the idea to see how easy it would be to do something bad with packages. Btw it has horrible green background for some reason, so it's unreadable, see in instruction below how I fixed it.


<details>
  <summary>Instruction</summary>
  
  1. Click on any element on webpage with right click and choose "Inspect"
  2. Find div which you see on my screenshot
  3. Instead of green, click on value, and input `white` to reset the color. Press "Enter"
  Now it's more readable!
  
  <img width="1430" alt="image" src="https://user-images.githubusercontent.com/528887/163689918-00cfb54c-4ab5-4d4b-8023-054998e3d14a.png">

  
</details>


### Various
* [Reskinning vs Redesign](https://www.navigator.ca/reskinning-all-you-need-to-know-about-snakes-and-websites/)
* [Is Sass even relevant anymore?](https://dev.to/kendalmintcode/is-anyone-really-using-sass-anymore-4dik) - it's a discussion by developers, you can see different opinions on that.
