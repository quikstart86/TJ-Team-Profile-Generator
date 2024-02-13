
// Employee class representing a generic employee
class Employee {
  // Constructor method to initialize employee's name, id, and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to get the employee's name
  getName() {
    return this.name;
  }

  // Method to get the employee's id
  getId() {
    return this.id;
  }

  // Method to get the employee's email
  getEmail() {
    return this.email;
  }

  // Method to get the role of the employee
  getRole() {
    return 'Employee';
  }
}

// Export the Employee class to make it available for use in other files
module.exports = Employee;
  