
// Import the Employee class from './Employee' file
const Employee = require('./Employee');

// Engineer class extends Employee class
class Engineer extends Employee {
  // Constructor method to initialize engineer's name, id, email, and GitHub username
  constructor(name, id, email, github) {
    // Check if GitHub username is provided, if not, throw an error
    if (!github) {
      throw new Error("Invalid input. Please provide GitHub username.");
    }
    // Call the constructor of the parent class (Employee) with name, id, and email
    super(name, id, email);
    // Set the engineer's GitHub username
    this.github = github;
  }

  // Method to get the engineer's GitHub username
  getGithub() {
    return this.github;
  }

  // Method to get the role of the engineer
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class to make it available for use in other files
module.exports = Engineer;
