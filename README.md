# GithubActions

[![Nodemon Version](https://img.shields.io/npm/v/nodemon.svg)](https://www.npmjs.com/package/nodemon) [![Concurrently Version](https://img.shields.io/npm/v/concurrently.svg)](https://www.npmjs.com/package/concurrently) [![wait-on Version](https://img.shields.io/npm/v/wait-on.svg)](https://www.npmjs.com/package/wait-on)

## 🚀 Description

This application is an online quiz. The content of the quiz revolves around python. Once you have opened the application you are able to click `start` to begin the quiz, and once you have answered the 10 questions you are presented with your result and the option to retake the quiz. However we are using a CI CD pipeline using Github Actions.

### 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Walkthrough](#walkthrough)
- [Issues](#issues)
- [Questions](#questions)
- [License](#license)

## 🔌 Installation

> [!IMPORTANT]
> This application will require users to use terminal (Mac) or GitBash (Windows)🚨.

1. Clone project using `git clone` from this like [Here](https://github.com/shareefevans/Test.Suite)
2. Open the project folder in a text editor such as `VS Code` or an alternative editor
3. Open the command line/terminal/gitbash and navigate to the appropriate folder within `Test.Suite` labelled Develop that contains a `package.json` file
4. Run `npm i` to install any dependencies in command line/terminal/gitbash
5. Run `npm run build` in command line/terminal/gitbash
6. Run `npm run start:dev` in command line/terminal/gitbash
7. A `dist` file should be created and the application should open in your browser, `listening from port 3001`

### Important Commands

```
git clone
npm i (OR) npm install
npm run start:dev
```

## 👍 Usage

1. run `npm run start:dev` after installing the software
2. the software should automatically open in your browser
3. click start Quiz
4. you'll be presented with a variety of questions which you can select the correct answer
5. once completed your results will be shown, you can also choose to retake the quiz

## ➕ Contributing

[Contributor Covenant](https://www.contributor-covenant.org/)

## ✅ Tests

- once the quiz is open select the first answer for each question
- once the quiz is complete check your score

## 🎥 Walkthrough

[Walkthrough Link Here](https://drive.google.com/file/d/1woeEWlP_VhispiaVkxLYqybQOjcuHlpz/view)

## ❌ Issues

The main issue that i have been unable to resolve right now is the E2E testing. for some reason, when the rest are tun in cypress, the application is unable to locate/verify the server is running on port 3001 and returns 404.

## ❓ Questions

### Github profile below 👇

- GitHub Name: shareefevans
- GitHub Link: [Follow link here](https://github.com/shareefevans)

### Contact Me

- Email: *shareef3vans@gmail.com*

## 🏆 License

This is an unlicensed project

- [MIT license 01](http://rem.mit-license.org)
- [MIT license 02](https://raw.githubusercontent.com/jeffbski/wait-on/master/LICENSE)
