const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");
const database = require("./db");

loadQuestions()

function loadQuestions() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: 'View all departments',
                    value: 'viewDepartments'
                },
                {
                    name: 'View all roles',
                    value: 'viewRoles'
                },
                {
                    name: 'View all employees',
                    value: 'viewEmployees'
                }, 
                {
                    name: 'Add department',
                    value: 'addDept'
                },
                {
                    name: 'Add role',
                    value: 'addRole'
                },
                {
                    name: 'Add employee',
                    value: 'addEmployee'
                },
                {
                    name: 'Update employee',
                    value: 'updateEmployee'
                }
            ]
        }
    ]).then(response => {
        console.log(response);
        let choice = response.choice
        switch (choice) {
            case "viewDepartments":
                viewDepartments();
                break;

            case "viewRoles":
                viewRoles();
                break;

            case "viewEmployees":
                viewEmployees();
                break;

            case "addDept":
                createDept();
                break;

            case "addRole":
                createRole();
                break;
            
            case "addEmployee":
                createEmployee();
                break;

            case "updateEmployee":
                createExistingEmployee();
                break;
        }
    })
}

function viewDepartments() {
    database.getAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log('you have', departments)
        console.table(departments)
    })
    .then(() => loadQuestions())
}

function viewRoles() {
    database.getAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log('you have', roles)
        console.table(roles)
    })
    .then(() => loadQuestions())
}

function viewEmployees() {
    database.getAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log('you have', employees)
            console.table(employees)
        })
        .then(() => loadQuestions())
}

function createDept() {
    prompt([
        {
            name: 'department_name',
            message: 'What is the dept name?'
        }
    ])
    .then(res => {
        let name = res;
        database.createDept(name)
            .then(() => loadQuestions())
            .catch((error) => console.error(error))
    })
}

function createRole() {
    prompt([
        {
            name: 'title',
            message: 'What is the name of the role?'
        },
        { 
            name: 'salary',
            message: 'What is the salary for this role?'
        },
        {
            name: 'department_id',
            message: 'What department is this role in?'
        }
    ])
    .then(res => {
        let name = res;
        database.createRole(name)
            .then(() => loadQuestions())
            .catch((error) => console.error(error))
    })
}

function createEmployee() {
    prompt([
        {
            name: 'first_name',
            message: 'What is the employees first name?'
        },
        { 
            name: 'last_name',
            message: 'What is the employees last name?'
        },
        {
            name: 'role_id',
            message: 'What is the role of this employee?'
        },
        {
            name: 'manager_id',
            message: "What is your managers id?"
        }
    ])
    .then(res => {
        let name = res;
        database.createEmployee(name)
            .then(() => loadQuestions())
            .catch((error) => console.error(error))
    })
}

function createExistingEmployee() {
    prompt([
        {
            name: 'name',
            message: 'Which employee are you updating?'
        },
        {
            name: 'role',
            message: 'What is this employees new role?'
        }
    ])
    .then(res => {
        let name = res;
        database.createExistingEmployee(name)
            .then(() => loadQuestions())
            .catch((error) => console.error(error))
    })
}