INSERT INTO department (department_name)
VALUES ( "Board"),
       ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

-- Role seeds
INSERT INTO role (department_id, title, department_name, salary)
VALUES (1, "CEO", "Board", 1000000),
       (2, "Sales Lead", "Sales", 100000),
       (2, "Salesperson", "Sales", 80000),
       (3, "Lead Engineer", "Engineering", 150000),
       (3, "Software Engineer", "Engineering", 120000),
       (4, "Accountant Manager", "Finance", 160000),
       (4, "Accountant", "Finance", 125000),
       (5, "Legal Team Lead", "Legal", 250000),
       (5, "Lawyer", "Legal", 190000);

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