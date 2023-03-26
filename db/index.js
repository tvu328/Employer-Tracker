const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department" 
        )
    }

    getAllRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, role.salary, role_department.id FROM role"
        )
    }
    getAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, employee.title, employee_department.id, employee.salary, employee.manager FROM employee" 
        )
    }
    createDept(dept) {
        return this.connection.promise().query("INSERT INTO department SET ?", dept)
    }
    createRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role)
    }
    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee)
    }
    createExistingEmployee(updatedemployee) {
        return this.connection.promise().query("INSERT INTO updateEmployee SET ?", updatedemployee)
    }
}

module.exports = new DB(connection);