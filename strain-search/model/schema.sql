create database Strain_Search;

USE Strain_Search;

CREATE TABLE Weed_Strains (
  strain_ID INT,
  strain_name VarChar(50),
  strain_type VarChar(20),
  thc_percent INT,
  strain_feeling VarChar(20),
  strain_image VarChar(50),
  PRIMARY KEY (strain_name)
);

CREATE TABLE THC_Concentrate (
  oil_ID INT,
  oil_name VarChar(50),
  concentrate_type VarChar(20),
  concentrate_strain_type VarChar(50),
  thc_percent INT,
  concentrate_feeling VarChar(20),
  concentrate_image Varchar(50),
  PRIMARY KEY (oil_name)
);


