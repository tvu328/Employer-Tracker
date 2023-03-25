INSERT INTO department (id, department_name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

-- Role seeds
INSERT INTO role (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

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