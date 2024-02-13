
// Import the Employee class from './Employee' file
const Employee = require('./Employee');

// Intern class extends Employee class
class Intern extends Employee {
  // Constructor method to initialize intern's name, id, email, and school
  constructor(name, id, email, school) {
    // Check if school is provided, if not, throw an error
    if (!school) {
      throw new Error("Invalid input. Please provide school.");
    }
    // Call the constructor of the parent class (Employee) with name, id, and email
    super(name, id, email);
    // Set the intern's school
    this.school = school;
  }

  // Method to get the intern's school
  getSchool() {
    return this.school;
  }

  // Method to get the role of the intern
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class to make it available for use in other files
module.exports = Intern;
