// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Intern = require("./Employee.js");

    class Intern extends Employee{

        constructor(name , id, email, school) {
        super(name,id,email);

        this.school = school;
    }

    getSchool(){
        return this.school
    }


    getRole(){
        return "Intern"
    }

}

module.exports = Intern;

