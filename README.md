# express-sqldb
git init -y
npm i express dotenv bcrypt ejs multer mysql2
create db with sql

CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
    `name` varchar(255) DEFAULT NULL COMMENT 'User Name',
    `email` varchar(255) DEFAULT NULL COMMENT 'Unique Email',
    `password` varchar(255) NOT NULL COMMENT 'Hashed Password',
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'Users table'

CREATE TABLE `posts` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
    `user_id` int(11) NOT NULL COMMENT 'Foreign Key to Users',
    `title` varchar(255) NOT NULL COMMENT 'Post Title',
    `content` text DEFAULT NULL COMMENT 'Post Content',
    `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Creation Time',
    `photo` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'Posts table'

set up config for db connection


