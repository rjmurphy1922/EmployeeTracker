const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");

// function mainMenu() {
  function newManager() {
    console.log('Please build your team');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's id?",
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",
        },
    ])


      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        console.log(manager);
  
        createTeam();
      }
   )
};

      function newEngineer() {
        console.log('Please build your team');
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: "What is Engineer's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the Engineer's id?",
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the Engineer's email?",
            },
            {
              type: 'input',
              name: 'school',
              message: "What Engineer's Github?",
            },
          ])
          .then((answers) => {
            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            teamMembers.push(engineer);
            console.log(engineer);

            createTeam();

          
      });
   
  }

    
      function newIntern() {
        console.log('Please build your team');
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'name',
              message: "What is intern's name?",
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the intern's id?",
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the intern's email?",
            },
            {
              type: 'input',
              name: 'school',
              message: "What is the school?",
            },
          ])
          .then((answers) => {
            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            teamMembers.push(intern);
            console.log(intern);

            createTeam()
        })
    }


      function createTeam() {

        inquirer
          .prompt([

            {
              message: "What role would you like to add",
              name:"choices",
              type: "list",
              choices: ["Engineer","Intern","No additional action"],
            }


          
          ])

          .then((createTeam) => {

            if (createTeam.choices === "Engineer"){
              newEngineer()
            }else if (createTeam.choices === "Intern")
            newIntern()
            else {
            function renderHTML() {

            const teamHTML = render(teamMembers);
              
            fs.writeFile(outputPath, teamHTML, (err) => {
                if (err) throw err;
                  console.log("Succesfully created");
            });
        }
            
            renderHTML()
          
          }
    
    })
  
  }

newManager()