CREATE DATABASE WeedStrains;

USE WeedStrains;

CREATE TABLE strains(
    strainName VARCHAR(30),
    weedType VARCHAR(20),
    img blob,
    PRIMARY KEY(strainName)
)
SELECT*FROM strains;