// TODO: Write code to define and export the Employee class

// employee.js

class Employee {
    constructor(name, id, email) {
      if (!name || !id || !email) {
        throw new Error("Invalid input. Please provide name, id, and email.");
      }
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return 'Employee';
    }
  }
  
  module.exports = Employee;
  