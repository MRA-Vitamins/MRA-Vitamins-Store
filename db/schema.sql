drop database if exists mra_vita;

create database mra_vita;


use mra_vita;

create table users(id int not null auto_increment,
username varchar(255) not null,
email varchar(255) not null,
primary key(id)

);



create table vitamins(id int,
label varchar(255) not null,
origin varchar(255) not null,
quantity varchar(255) not null,
price varchar(255) not null


);



insert into vitamins(id, label, origin, quantity, price)
VALUES (1000,'MRA Vitamin D', 'USA', '220', "$9.74" ),
       (1001,'MRA Vitamin C', 'USA', '250', "$10.00"),
       (1002,'MRA Vitamin E', 'USA', '250', "$9.50"),
       (1003,'MRA Black Seed Oil', 'USA', '8 OZ', "25.00"),
       (1004,'MRA Tumeric', 'USA', '90', '$15.00'),
       (1005,'MRA Elder Berry Extract', 'USA', '8 OZ', '$10.00'),
       (1006,'MRA Noni Berry', 'USA', '250', '$15.00'),
       (1007,'MRA Calcium', 'USA', '100', '$15.00'),
       (1008,'MRA Garlic Pills', 'USA', '90', '$10.00'),
       (1009,'MRA Apple Cider Vin', 'USA', '100', '9.74'),
       (1010,'MRA Multi-Vit His', 'USA', '100', '$9.50'),
       (1011,'MRA Multi-Vit Hers', 'USA', '100', '$15.00'),
       (1012,'MRA Echanasea', 'USA', '100', '$5.00'),
       (1013,'MRA Iron', 'USA', '100', '$15.00'),
       (1014,'MRA Vitamin K', 'USA', '100', '$9.50'),
       (1015,'MRA Folic Acid', 'USA', '220', '$9.50');


    
insert into users(username, email)
values('anson', 'anson@gmail.com'),
      ('george', 'george@gmail.com'),
      ('happy', 'happy@gmail.com'),
      ('deborah', 'deborah@gmail.com'),
      ('lourdes', 'lourdes@gmail.com');




select * from vitamins;
select * from users;
