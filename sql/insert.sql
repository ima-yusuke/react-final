-- create table user_tb (
-- 	fname VARCHAR(50),
-- 	lname VARCHAR(50),
-- 	email VARCHAR(50),
-- 	phone VARCHAR(50),
-- 	pass VARCHAR(200),
-- 	age INT,
-- 	role INT,
-- 	dis INT
-- );


INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Maria', 'Maria', 'maria@test.com', '176-948-5418', 'sbo532M8cG', 61, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Claire', 'Claire', 'claire@test.com', '168-888-4244', 'zbNyqlDJ2', 17, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Jeeyoung', 'Jeeyoung', 'jeeyoung@test.com', '991-322-4730', 'dNR0lm8', 30, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Jade', 'Jade', 'jade@test.com', '878-776-9047', '8sx1DMGw', 37, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Yusuke', 'Yusuke', 'yusuke@test.com', '878-776-9047', '8sx1DMGw', 37, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Shotaro', 'Shotaro', 'shotaro@test.com', '878-776-9047', '8sx1DMGw', 37, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Takumi', 'Takumi', 'takumi@test.com', '878-776-9047', '8sx1DMGw', 37, 0, 0);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Honoria', 'Flade', 'hflade4@i2i.jp', '243-765-9655', 'ggP1AxCvlH5f', 21, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Elena', 'Reilingen', 'ereilingen5@discovery.com', '989-352-8885', 'hpXCyUGp7s', 51, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Sofia', 'Eagle', 'seagle6@unesco.org', '811-994-5116', 'A0c7AyihQOm', 64, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Benedetta', 'McGinney', 'bmcginney7@chicagotribune.com', '992-151-6738', 'FxeawwBFDSsW', 41, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Cheri', 'Burman', 'cburmanb@fc2.com', '329-628-5052', 'Wqvgzig8P', 59, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Pier', 'Heading', 'pheadingc@shinystat.com', '499-981-2454', '0ECtYU1UGWAu', 53, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Nikki', 'Pretti', 'nprettid@1688.com', '161-904-4558', '1gKRBamzlS4', 23, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Evan', 'Gath', 'egathe@simplemachines.org', '949-844-4062', '9JryNte9M68t', 62, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Ferdie', 'Kaszper', 'fkaszperf@ox.ac.uk', '566-157-1360', 'Yr2eVF8y', 47, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Diann', 'Ipsley', 'dipsleyg@rambler.ru', '300-972-9544', 'FKIysll', 30, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Miltie', 'Sijmons', 'msijmonsh@scribd.com', '266-305-4415', 'WxCtaCe', 49, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Jens', 'Roddie', 'jroddiei@gnu.org', '827-135-0477', 'akoF6F7iLB', 50, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Andriana', 'Dabbes', 'adabbesj@meetup.com', '229-625-6737', 'BdgSfQxrNCx', 25, 1, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Karlee', 'Begley', 'kbegley8@economist.com', '107-280-1888', 'GYv78Frbh5', 17, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Heindrick', 'Tuhy', 'htuhy9@istockphoto.com', '557-342-7819', 'sNKq3OsVwD', 61, 2, 1);
INSERT INTO user_tb (fname, lname, email, phone, pass, age, role, dis) VALUES ('Lexi', 'Gayforth', 'lgayfortha@home.pl', '807-683-1408', 'RJURMiep', 46, 1, 1);

-- role -> 1=>user 2=>enployer 0=>admin

-- create table ja_tb (
-- 	jobid INT,
-- 	uid INT,
-- 	title VARCHAR(50),
-- 	contents VARCHAR(1000),
-- 	address VARCHAR(50),
-- 	pic VARCHAR(100),
-- 	salary INT,
-- 	dis INT
-- );


INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (8, 'Senior Editor', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 'ON', 'img\/pic-01.jpg', 31, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (14, 'Software Consultant', 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 'QC', 'img\/pic-02.jpg', 23, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (14, 'Speech Pathologist', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', 'ON', 'img\/pic-03.jpg', 34, 1);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (16, 'Business Systems Development Analyst', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 'QC', 'img\/pic-04.jpg', 37, 1);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (8, 'Sales Associate', 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 'BC', 'img\/pic-05.jpg', 19, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (17, 'Senior Quality Engineer', 'Etiam vel augue.', 'BC', 'img\/pic-06.jpg', 21, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (17, 'Marketing Assistant', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 'BC', 'img\/pic-07.jpg', 40, 1);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (21, 'Physical Therapy Assistant', 'Donec semper sapien a libero.', 'QC', 'img\/pic-08.jpg', 45, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (19, 'Web Developer IV', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 'QC', 'img\/pic-09.jpg', 35, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (22, 'Business Systems Development Analyst', 'Vivamus in felis eu sapien cursus vestibulum.', 'BC', 'img\/pic-10.jpg', 22, 1);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (8, 'Geological Engineer', 'In sagittis dui vel nisl. Duis ac nibh.', 'ON', 'img\/pic-11.jpg', 36, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (14, 'VP Product Management', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 'MB', 'img\/pic-12.jpg', 18, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (16, 'Chief Design Engineer', 'Suspendisse accumsan tortor quis turpis. Sed ante.', 'AB', 'img\/pic-13.jpg', 26, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (8, 'Developer IV', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.', 'QC', 'img\/pic-14.jpg', 36, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (17, 'Structural Engineer', 'Morbi quis tortor id nulla ultrices aliquet.', 'QC', 'img\/pic-15.jpg', 36, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (16, 'Software Test Engineer II', 'Vivamus vel nulla eget eros elementum pellentesque.', 'QC', 'img\/pic-13.jpg', 32, 1);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (17, 'Design Engineer', 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', 'QC', 'img\/pic-15.jpg', 34, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (19, 'VP Sales', 'Nullam molestie nibh in lectus.', 'ON', 'img\/pic-14.jpg', 37, 1);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (22, 'Programmer Analyst II', 'Vestibulum rutrum rutrum neque.', 'AB', 'img\/pic-12.jpg', 25, 0);
INSERT INTO ja_tb (uid, title, contents, address, img, salary, dis) VALUES (22, 'Cost Accountant', 'Nulla tellus.', 'AB', 'img\/pic-10.jpg', 43, 0);

-- create table applier_tb (
-- 	apid INT,
-- 	jobid INT,
-- 	uid INT
-- );


INSERT INTO applier_tb (jobid, uid) VALUES (1, 9);
INSERT INTO applier_tb (jobid, uid) VALUES (2, 10);
INSERT INTO applier_tb (jobid, uid) VALUES (3, 11);
INSERT INTO applier_tb (jobid, uid) VALUES (4, 12);
INSERT INTO applier_tb (jobid, uid) VALUES (5, 13);
INSERT INTO applier_tb (jobid, uid) VALUES (6,12);
INSERT INTO applier_tb (jobid, uid) VALUES (7, 9);
INSERT INTO applier_tb (jobid, uid) VALUES (8, 20);
INSERT INTO applier_tb (jobid, uid) VALUES (9, 11);
INSERT INTO applier_tb (jobid, uid) VALUES (10, 12);
INSERT INTO applier_tb (jobid, uid) VALUES (11, 11);
INSERT INTO applier_tb (jobid, uid) VALUES (12, 12);
INSERT INTO applier_tb (jobid, uid) VALUES (13, 13);
INSERT INTO applier_tb (jobid, uid) VALUES (14, 15);
INSERT INTO applier_tb (jobid, uid) VALUES (15, 15);
INSERT INTO applier_tb (jobid, uid) VALUES (16, 18);
INSERT INTO applier_tb (jobid, uid) VALUES (16, 17);
INSERT INTO applier_tb (jobid, uid) VALUES (14, 18);
INSERT INTO applier_tb (jobid, uid) VALUES (11, 19);
INSERT INTO applier_tb (jobid, uid) VALUES (9, 20);


-- create table fav_tb (
-- 	jobid INT,
-- 	uid INT,
-- 	fav INT
-- );


INSERT INTO fav_tb (jobid, uid, fav) VALUES (1, 9, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (2, 10, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (3, 11, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (4, 12, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (5, 13, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (6, 12, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (7, 9, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (8, 20, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (9, 11, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (10, 12, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (11, 11, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (12, 12, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (13, 13, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (14, 15, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (15, 15, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (16, 18, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (12, 17, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (13, 18, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (14, 19, 0);
INSERT INTO fav_tb (jobid, uid, fav) VALUES (16, 20, 0);