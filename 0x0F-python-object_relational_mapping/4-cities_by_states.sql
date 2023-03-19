-- Create states table in hbtn_0e_4_usa with some data
CREATE DATABASE IF NOT EXISTS HBTN_0E_4_USA;

USE HBTN_0E_4_USA;

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

CREATE TABLE IF NOT EXISTS CITIES (
    ID INT NOT NULL AUTO_INCREMENT,
    STATE_ID INT NOT NULL,
    NAME VARCHAR(256) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY(STATE_ID) REFERENCES STATES(ID)
);

INSERT INTO CITIES (
    STATE_ID,
    NAME
) VALUES (
    1,
    "San Francisco"
),
(
    1,
    "San Jose"
),
(
    1,
    "Los Angeles"
),
(
    1,
    "Fremont"
),
(
    1,
    "Livermore"
);

INSERT INTO CITIES (
    STATE_ID,
    NAME
) VALUES (
    2,
    "Page"
),
(
    2,
    "Phoenix"
);

INSERT INTO CITIES (
    STATE_ID,
    NAME
) VALUES (
    3,
    "Dallas"
),
(
    3,
    "Houston"
),
(
    3,
    "Austin"
);

INSERT INTO CITIES (
    STATE_ID,
    NAME
) VALUES (
    4,
    "New York"
);

INSERT INTO CITIES (
    STATE_ID,
    NAME
) VALUES (
    5,
    "Las Vegas"
),
(
    5,
    "Reno"
),
(
    5,
    "Henderson"
),
(
    5,
    "Carson City"
);