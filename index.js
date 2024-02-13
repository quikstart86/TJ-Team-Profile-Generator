
// Import necessary modules and classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

// Define output directory and file path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Import function to render HTML page template
const render = require("./src/page-template");

// Initialize an empty array to store team members' information
const teamMembers = [];

// Function to prompt for manager's information
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
        // Create Manager instance with provided information and add to teamMembers array
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        // Prompt for adding another team member
        promptAddMember();
    });
}

// Function to prompt for adding a team member or finishing team building
function promptAddMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberType",
            message: "Add a team member(or finish building the team):",
            choices: ["Engineer", "Intern", "Finish building the team"],
        },
    ]).then(answer => {
        // Based on user's choice, prompt for Engineer, Intern, or finish building the team
        if (answer.memberType === "Engineer") {
            promptEngineer();
        } else if (answer.memberType === "Intern") {
            promptIntern();
        } else {
            // Generate HTML file when finished adding team members
            generateHTML();
        }
    });
}

// Function to prompt for engineer's information
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
        // Create Engineer instance with provided information and add to teamMembers array
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        // Prompt for adding another team member
        promptAddMember();
    });
}

// Function to prompt for intern's information
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
        // Create Intern instance with provided information and add to teamMembers array
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        // Prompt for adding another team member
        promptAddMember();
    });
}

// Function to generate HTML file with team profile cards
function generateHTML() {
    // Render HTML template with teamMembers data
    const html = render(teamMembers);
    // Ensure directory exists, then write HTML file to outputPath
    ensureDirectoryExistence(outputPath);
    fs.writeFileSync(outputPath, html);
    console.log(`HTML file generated at ${outputPath}`);
}

// Function to ensure directory existence before writing file
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



