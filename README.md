# TJ-Team-Profile-Generator

## [Table of Contents](#table-of-contents)

* [Description](#description)
* [User-Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Mock-Up](#mock-up)
* [Installation](#installation)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)


## [Description](#description)
The task is to take given starter code and convert it into a working `Node.js command-line application`. This application will take in information about employees on a software engineering team, then `generates an HTML webpage that displays summaries for each person`. You have been provided with tests, so make sure `every part of your code passes each provided test`.

The application can be invoked by using the following command:

```bash
node index.js (and carry out tests using): npm run test
```
## [User-Story](#user-story)

* As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

## [Acceptance Criteria](#acceptance-criteria)
* Create a command-line application that accepts accepts user input using the provided starter code.   
* Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
  * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location.

## [Mock-Up](#mock-up)

![App demo](./assets/img/TJ-ReadME%20Generator_%20Feb%206,%202024%2010_11%20PM.gif)

![Output file example](./assets/img/generated%20readme%20screenshot.png)
<br>

[Project Repo](https://github.com/quikstart86/TJ-Readme-Generator)


## [Installation](#installation)

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Install `jest` for tests and `inquirer` for data.

## [Credits](#credits)

Supplied with starter code by © 2023 edX Boot Camps LLC. and built upon by `Thomas Jack`

<br>

**Support and mentoring from course mentors:**
<br>
[Meg Meyers](https://github.com/femke77)

**Peer Study Group Support:**
<br>
Matt Dudman
<br>
Georgie Lilington

**Supporting links:** <br>
N/A

## [License](#license)

MIT License

Copyright (c) <2023> <Home-App>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## [Badges](#badges)

![Static Badge](https://img.shields.io/badge/JavaScript-orange)
![Static Badge](https://img.shields.io/badge/NODE-green)
![Static Badge](https://img.shields.io/badge/Jest-Blue)
![Static Badge](https://img.shields.io/badge/HTML-Pink)
![Static Badge](https://img.shields.io/badge/Bootstrap-red)


## [Features](#features)

N/A

## [Contributing](#contributing)

* Matt Dudman
* Georgie Lilington 

## [Tests](#tests)

Tested application for issues with loading/ user feedback/file creation/ de-bugging

<br>

[Back to top](#top)