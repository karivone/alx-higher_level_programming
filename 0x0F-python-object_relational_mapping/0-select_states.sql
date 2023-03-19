-- Create states table in hbtn_0e_0_usa with some data
CREATE DATABASE IF NOT EXISTS HBTN_0E_0_USA;

USE HBTN_0E_0_USA;

CREATE TABLE IF NOT EXISTS STATES (
    ID INT NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(256) NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO STATES (
    NAME
) VALUES (
    "California"
),
(
    "Arizona"
),
(
    "Texas"
),
(
    "New York"
),
(
    "Nevada"
);