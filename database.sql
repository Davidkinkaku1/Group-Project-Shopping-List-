-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE groceries(
	"id" SERIAL PRIMARY KEY NOT NULL,
	"item" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL(15,2),
    "unit" VARCHAR(50) NOT NULL
);

INSERT INTO "groceries" 
	("item", "quantity", "unit") 
VALUES 
	('Appels',3, '2 lbs'),
	('Milk', 4, '1 gallon');
	
	--select all groceries
SELECT * FROM "groceries";

DROP TABLE "groceries";

