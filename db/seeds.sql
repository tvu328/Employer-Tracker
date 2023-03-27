INSERT INTO department (department_name)
VALUES ( "Board"),
       ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

-- Role seeds
INSERT INTO role (title, department_id, salary)
VALUES ("CEO", 1, 1000000),
       ("Sales Lead", 2, 100000),
       ("Salesperson", 2, 80000),
       ("Lead Engineer", 3, 150000),
       ("Software Engineer", 3, 120000),
       ("Accountant Manager", 4, 160000),
       ("Accountant", 4, 125000),
       ("Legal Team Lead", 5, 250000),
       ("Lawyer", 5, 190000);

-- Employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tyler", "Vu", 1, null),
       ("Brandon", "Nguyen", 2, 1),
       ("Bryan", "Nguyen", 3, 3),
       ("Peter", "Do", 4, 1),
       ("Andy", "Bui", 5, 4), 
       ("Kevin", "Nguyen", 6, 1),
       ("Minh", "Nguyen", 7, 5),
       ("Martin", "Nguyen", 8, 1),
       ("Luka", "Doncic", 9, 6);