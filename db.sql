create database node_demo;

create user 'demo_user'@'localhost' identified by 'demo1234*';
grant all privileges on node_demo.* to 'demo_user'@'localhost';

flush privileges;
commit;

create table messages(
	id int primary key auto_increment,
    message varchar(64)
);