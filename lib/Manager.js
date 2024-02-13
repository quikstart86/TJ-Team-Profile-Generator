

// Import the Employee class from './Employee' file
const Employee = require('./Employee');

// Manager class extends Employee class
class Manager extends Employee {
  // Constructor method to initialize manager's name, id, email, and office number
  constructor(name, id, email, officeNumber) {
    // Call the constructor of the parent class (Employee) with name, id, and email
    super(name, id, email);
    // Set the manager's office number
    this.officeNumber = officeNumber;
  }

  // Method to get the manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method to get the role of the manager
  getRole() {
    return 'Manager';
  }
}

// Export the Manager class to make it available for use in other files
module.exports = Manager;
