DROP TABLE IF EXISTS sequan_db;
CREATE DATABASE sequan_db;

CREATE TABLE account 
    (user_id SERIAL PRIMARY KEY, 
    password VARCHAR(64) NOT NULL, 
    email VARCHAR(50) NOT NULL, 
    phone_number VARCHAR(20), 
    is_approved BOOLEAN NOT NULL DEFAULT FALSE, 
    is_admin BOOLEAN NOT NULL DEFAULT FALSE);

CREATE TABLE images 
    (image_id SERIAL PRIMARY KEY, 
    image_name VARCHAR(100) UNIQUE NOT NULL, 
    image_path VARCHAR(500) NOT NULL);

CREATE TABLE reviewed_images 
    (id SERIAL PRIMARY KEY, 
    image_id INT NOT NULL, 
    user_id INT NOT NULL, 
    review_state INT NOT NULL, 
    selection json NOT NULL, 
    comments VARCHAR(500), 
    FOREIGN KEY (image_id) REFERENCES images (image_id), 
    FOREIGN KEY (user_id) REFERENCES account (user_id));