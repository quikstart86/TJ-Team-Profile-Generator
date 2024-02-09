// // const Manager = require("./lib/Manager");
// // const Engineer = require("./lib/Engineer");
// // const Intern = require("./lib/Intern");
// // const inquirer = require("inquirer");
// // const path = require("path");
// // const fs = require("fs");

// // const OUTPUT_DIR = path.resolve(__dirname, "output");
// // const outputPath = path.join(OUTPUT_DIR, "team.html");

// // const render = require("./src/page-template.js");




const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template");
const teamMembers = [];
// // TODO: Write Code to gather information about the development team members, and render the HTML file.


function promptManager() {
    console.log("Please enter information for the team manager:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Manager's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number:",
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptAddMember();
    });
}
function promptAddMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberType",
            message: "Add a team member(or finish building the team):",
            choices: ["Engineer", "Intern", "Finish building the team"],
        },
    ]).then(answer => {
        if (answer.memberType === "Engineer") {
            promptEngineer();
        } else if (answer.memberType === "Intern") {
            promptIntern();
        } else {
            generateHTML();
        }
    });
}
function promptEngineer() {
    console.log("Please enter information for the engineer:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Engineer's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Engineer's email:",
        },
        {
            type: "input",
            name: "github",
            message: "Engineer's GitHub username:",
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptAddMember();
    });
}
function promptIntern() {
    console.log("Please enter information for the intern:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Intern's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Intern's email:",
        },
        {
            type: "input",
            name: "school",
            message: "Intern's school:",
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptAddMember();
    });
}

// function to generate HTML page with team profile cards
//  function to generate HTML page with team member info

// Function to generate HTML file
function generateHTML() {
    const html = render(teamMembers);
    ensureDirectoryExistence(outputPath);
    fs.writeFileSync(outputPath, html);
    console.log(`HTML file generated at ${outputPath}`);
  }
  
  // Function to ensure directory existence
  function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }
// Start by prompting for the team manager's information
promptManager();



