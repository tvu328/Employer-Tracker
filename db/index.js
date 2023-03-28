const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department_name FROM department" 
        )
    }

    getAllRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, role.salary, department_id FROM role"
        )
    }
    getAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, first_name, last_name, role_id, manager_id FROM employee" 
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
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE first_name = ?", [updatedemployee.role, updatedemployee.name])
    }
}

module.exports = new DB(connection);