use HYF;
set names utf8mb4;

CREATE TABLE `student` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `email` varchar(255) NULL,
    `class` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `course` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` varchar(255) NOT NULL, 
    `duration` int(10) unsigned NOT NULL,
    `start_day` DATETIME NOT NULL,
    `end_day` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student_course` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`student_id` int(10) unsigned NOT NULL,
    `course_id` int(10) unsigned NOT NULL,
	CONSTRAINT `fk_sudent_student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_course_course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- STUDENTS
insert into student (id, name, phone, email, class) values (1, 'Kseniia Zar', '31-727-448', 'kseniiazar@gmail.com', '08');
insert into student (id, name, phone, email, class) values (2, 'Hakki', '263-972-643', 'adahbour54@gmail.com', '08');
insert into student (id, name, phone, email, class) values (3, 'Keerthika devi Alampalli', '3745-285-6338', 'keerthi1822@gmail.com', '08');
insert into student (id, name, phone, email, class) values (4, 'Rieko', '971-436-6442', 'rieko@gmail.com', '08');
insert into student (id, name, phone, email, class) values (5, 'Sheila Qasemi', '457-527-9154', 'sheilaqasemi2018@gmail.com', '08');
insert into student (id, name, phone, email, class) values (6, 'Afshin', '548-420-7322', 'afshin_rommel@yahoo.com', '08');
insert into student (id, name, phone, email, class) values (7, 'Gordon Fields', '970-482-1032', 'wogzijpeg@jusvijsut.lb', '07');
insert into student (id, name, phone, email, class) values (8, 'Mitchell Byrd', '480-835-5405', 'mucipok@dul.dz', '07');
insert into student (id, name, phone, email, class) values (9, 'Charles Norman', '338-305-498', 'lujfi@dodu.lr', '07');

-- COURSES
insert into course (title, duration, start_day, end_day) values ('HTML', 3, '2018-11-4 06:54:16', '2018-10-22 06:54:16');
insert into course (title, duration, start_day, end_day) values ('CSS', 3, '2018-11-4 06:54:16', '2018-10-22 06:54:16');
insert into course (title, duration, start_day, end_day) values ('JavaScript', 9, '2018-12-1 06:54:16', '2019-02-07 06:54:16');
insert into course (title, duration, start_day, end_day) values ('Git', 1, '2018-11-24 06:54:16', '2018-10-30 06:54:16');
insert into course (title, duration, start_day, end_day) values ('NodeJS', 5, '2019-02-07 06:54:16', '2019-03-15 06:54:16');
insert into course (title, duration, start_day, end_day) values ('Databases', 3, '2019-03-16 06:54:16', '2019-04-10 06:54:16');
insert into course (title, duration, start_day, end_day) values ('React', 5, '2019-04-15 06:54:16', '2018-05-22 06:54:16');
insert into course (title, duration, start_day, end_day) values ('HTML', 3, '2018-03-08 06:54:16', '2018-04-05 06:54:16');
insert into course (title, duration, start_day, end_day) values ('Angular', 5, '2018-04-10 06:54:16', '2018-05-17 06:54:16');
insert into course (title, duration, start_day, end_day) values ('React Native', 7, '2018-05-20 06:54:16', '2018-06-30 06:54:16');

-- Student-course
insert into student_course (student_id, course_id) values (1, 1);
insert into student_course (student_id, course_id) values (1, 2);
insert into student_course (student_id, course_id) values (1, 3);
insert into student_course (student_id, course_id) values (1, 4);
insert into student_course (student_id, course_id) values (1, 5);
insert into student_course (student_id, course_id) values (1, 6);
insert into student_course (student_id, course_id) values (1, 7);
insert into student_course (student_id, course_id) values (2, 1);
insert into student_course (student_id, course_id) values (2, 2);
insert into student_course (student_id, course_id) values (2, 3);
insert into student_course (student_id, course_id) values (2, 4);
insert into student_course (student_id, course_id) values (2, 5);
insert into student_course (student_id, course_id) values (2, 6);
insert into student_course (student_id, course_id) values (2, 7);
insert into student_course (student_id, course_id) values (3, 1);
insert into student_course (student_id, course_id) values (3, 2);
insert into student_course (student_id, course_id) values (3, 3);
insert into student_course (student_id, course_id) values (3, 4);
insert into student_course (student_id, course_id) values (3, 5);
insert into student_course (student_id, course_id) values (3, 6);
insert into student_course (student_id, course_id) values (3, 7);
insert into student_course (student_id, course_id) values (4, 1);
insert into student_course (student_id, course_id) values (4, 2);
insert into student_course (student_id, course_id) values (4, 3);
insert into student_course (student_id, course_id) values (4, 4);
insert into student_course (student_id, course_id) values (4, 5);
insert into student_course (student_id, course_id) values (4, 6);
insert into student_course (student_id, course_id) values (4, 7);
insert into student_course (student_id, course_id) values (5, 1);
insert into student_course (student_id, course_id) values (5, 2);
insert into student_course (student_id, course_id) values (5, 3);
insert into student_course (student_id, course_id) values (5, 4);
insert into student_course (student_id, course_id) values (5, 5);
insert into student_course (student_id, course_id) values (5, 6);
insert into student_course (student_id, course_id) values (5, 7);
insert into student_course (student_id, course_id) values (6, 1);
insert into student_course (student_id, course_id) values (6, 2);
insert into student_course (student_id, course_id) values (6, 3);
insert into student_course (student_id, course_id) values (6, 4);
insert into student_course (student_id, course_id) values (6, 5);
insert into student_course (student_id, course_id) values (6, 6);
insert into student_course (student_id, course_id) values (6, 7);
insert into student_course (student_id, course_id) values (7, 8);
insert into student_course (student_id, course_id) values (7, 9);
insert into student_course (student_id, course_id) values (7, 10);
insert into student_course (student_id, course_id) values (8, 8);
insert into student_course (student_id, course_id) values (8, 9);
insert into student_course (student_id, course_id) values (8, 10);
insert into student_course (student_id, course_id) values (9, 8);