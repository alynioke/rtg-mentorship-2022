### Prepare folder structure

1. In project's directory, create a folder named `sass`.
2. Copy paste all your `.css` files into the `sass` folder.
3. Rename all files in `sass` folder instead of `.css` to be `.scss`
4. Delete all CSS files outside `sass` folder, except the main one (in our project it's `styles.css`).
5. Open `styles.css` and remove all content inside.
6. in `index.html` delete all css file links except the link with the main file `<link rel="stylesheet" href="styles.css" />`

### Install Sass

1. Install node.js - it's needed to compile Sass via the command line. Download it from the official website [https://nodejs.org/en/download/](nodejs.org) - choose "LTS" tab, and then click on your operating systen icon. After it downloaded, open it & follow the wizard.
2. Via terminal, navigate to project folder on your computer. In VSCode it's easy - just open project folder, and then "Terminal -> New Terminal", and you're in correct place!
3. Write command `npm init` and press Enter. This will initialize NPM - the Node Package Manager for JavaScript. NPM makes it easy to add and remove code packages to your project.
4. In terminal, you will be prompted to answer several questions about the project, **press Enter each time**, this will make npm proceed with default setup. After setup NPM will generate a `package.json` file in project folder.
5. In terminal, write command `npm install sass` and press Enter. This will install Sass preprocessor package to the project.

### Use command

1. Open the `package.json` file in a code editor.
2. In the `scripts` section, put `,` in the end of line of test command.
3. Add Sass command on the next line: `"sass": "sass sass/styles.scss styles.css --watch"` and save. The watch flag (`--watch`) tells Sass to watch the `main.scss` file in the `sass` directory for changes and output them in `styles.css` in the root directory.
4. In the terminal write `npm run sass` - it will use command you just created in `package.json` and will watch for all changes inside `sass/styles.scss`.
5. Open`sass/styles.scss` in code editor and save this file - in terminal you should green message confirming that code is saved:
   <img width="754" alt="image" src="https://user-images.githubusercontent.com/528887/162324023-65c07b86-3f6f-4a35-853a-3c3d85701427.png">

## Sass exercises

Important: if after some step something doesn't work, try stopping the sass command (by pressing `cmd + c` or `ctrl + c`) and running it again.

#### Modules

- Distribute contents of `styles.scss` into separate files: for footer, header, intro, and other blocks (if you haven't done it already).
- Include those files into `styles.scss` with `@use` command.
- Now your code is more readable and has clear separation of concerns!

#### Variables

- Create `variables.scss` file inside `sass` folder.
- Include `variables.scss` into each of your other files by writing `@use 'variables';` on top of file ([example](https://github.com/alynioke/exercise-sass-ready/blob/main/sass/footer.scss#L1))
- Find common values inside CSS and define variables for each of them inside that file. Now put variable names instead of actual values in each file.
- Values I suggest to substitute with variables: colors, font sizes, logo size and logo font, value of media query.
- Now your code is more manageable and you control all values easier!

#### Nesting

If you have CSS selector combined from 2 classes, it means you can put one class into another by nesting. Do this where you see 2 classes combined. Same could be done for media query and for pseudo classes like `:hover` or `:last-of-type` (which uses special `&` character from sass for concatenation)

- After doing this, now your code is easier to write! Because you don't need to prefix your classes each time with other classes, you can nest them.

#### Mixins

In some places in various sass files there is some repeated code. This repeated code answers for centering elements in CSS. It has 3 rules:

```
display: flex;
align-items: center;
justify-content: center;
```

Let's shorten this.

- Create new file in `sass` folder called `helpers.scss`.
- Include `helpers.scss` into each of your other files (where you use 3 lines from above) by writing `@use 'helpers.scss' as h;` on top of file.
- Define mixin there which will answer for centering state which will combine inside those 3 rules.
- Use this mixin to substitute abovementioned rules in each place they appear with `@include`.
- Now there is less code and no repetitions! And code is easier to manage, because if we need to change centering we can do so from 1 place!

