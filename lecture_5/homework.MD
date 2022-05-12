# a11y homework

## Introduction
Your RTG landing page looks great, but is it accessible?  
Take your time and work on improving **every** user experience :)  


## TODOs

### Semantic HTML
#### Improve the site structure
Convert each "container" `<div>` into `<section>`. (By containter I mean e.g. `<div class="intro">` or `<div class="social-container">`)
#### Use a landmark!
Convert `<div class="footer">` into `<footer class="footer">`
#### Site header
Page should contain exactly one `<h1>` header - it's not prohibited by HTML specification, but having only one top-level header is better for screen reader users: [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes).  
Make `<div class="main-heading">Mentorship program</div>` an `<h1>`.
#### Section headers
In most cases [sections should contain headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) too. Your page is one of this cases, so go and transform your section heading-lookalikes into proper headings: `<h2>`.  
**Sidenote**: It's really important to not skip any level of headings!

<p>Don't:</p><div><pre><code><span"><span"><span>&lt;</span>h1</span><span>&gt;</span></span>Heading level 1<span"><span"><span>&lt;/</span>h1</span><span>&gt;</span></span>
<span"><span"><span>&lt;</span>h3</span><span>&gt;</span></span>Heading level 3<span"><span"><span>&lt;/</span>h3</span><span>&gt;</span></span>
<span"><span"><span>&lt;</span>h4</span><span>&gt;</span></span>Heading level 4<span"><span"><span>&lt;/</span>h4</span><span>&gt;</span></span>
</code></pre></div>
<p>Do:</p>
<div><pre><code><span"><span"><span>&lt;</span>h1</span><span>&gt;</span></span>Heading level 1<span"><span"><span>&lt;/</span>h1</span><span>&gt;</span></span>
<span"><span"><span>&lt;</span>h2</span><span>&gt;</span></span>Heading level 2<span"><span"><span>&lt;/</span>h2</span><span>&gt;</span></span>
<span"><span"><span>&lt;</span>h3</span><span>&gt;</span></span>Heading level 3<span"><span"><span>&lt;/</span>h3</span><span>&gt;</span></span>
</code></pre></div>
  
  source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements   
    

### Helping user understand the site better
#### Text alternatives of non-text content
Give social media buttons names accessible for SR users, e.g. by adding `aria-label` attribute.
```
        <a target="_blank" href="https://www.facebook.com/RigaTechGirls">
          <svg
            class="social-image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <title>icon</title>
            <path
              d="M26.34 10C22.45 10 20 12.57 20 16.7v3.8h-3.8a.5.5 0 0 0-.5.5v5.08a.5.5 0 0 0 .5.5H20V37.5a.5.5 0 0 0 .5.5h4.95a.5.5 0 0 0 .5-.5V26.57h3.22a.5.5 0 0 0 .5-.44l.59-5.08a.5.5 0 0 0-.5-.56H26v-3.32c0-1.3.14-1.78 1.59-1.78h2.21a.5.5 0 0 0 .5-.5v-4.2c0-.46 0-.69-3.96-.69zm3 4.38h-1.78c-2.39 0-2.59 1.44-2.59 2.78V21a.5.5 0 0 0 .5.5h3.75l-.47 4.08h-3.28a.5.5 0 0 0-.5.5V37H21V26.07a.5.5 0 0 0-.5-.5h-3.8V21.5h3.83A.5.5 0 0 0 21 21v-4.3c0-3.57 2-5.7 5.31-5.7 1.2 0 2.38.06 3 .12v3.27zM24 .52A23.48 23.48 0 1 0 47.5 24 23.52 23.52 0 0 0 24 .52zm0 46A22.48 22.48 0 1 1 46.5 24 22.51 22.51 0 0 1 24 46.48z"
            ></path>
          </svg>
        </a>
```
```
<a target="_blank" href="https://www.facebook.com/RigaTechGirls" aria-label="Facebook">
(...)
```  
  
#### Screen reader only content
Aria-labels are not the only way of providing information visible only for screen readers.  
To help an user understand our page structure better we can also create a screen-reader only texts and headings or subheadings.  
1. create `sr-only` class in your stylesheet with following properties:
```
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```
2. If some of your sections don't have `<h2>` heading - go on and create them, this will benefit semantics of HTML and accessibility ath the same time!  
And make sure to give them `sr-only` class, so they'll appear inside DOM while being visually invible.  
Try to give a screen reader user an idea of ection content only by looking at the heading.  

#### Make accordion accessible TODO