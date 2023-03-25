const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department" // look into rest of this query
        )
    }

    getAllRoles() {
        return this.connection.promise().query(
            "SELECT role"
        )
    }
    getAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name" // look into rest of this query
        )
    }

    createDept(dept) {
        return this.connection.promise().query("INSERT INTO department SET ?", dept)
    }
}

module.exports = new DB(connection);