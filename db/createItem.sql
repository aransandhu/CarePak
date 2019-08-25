DROP TABLE IF EXISTS Item;

CREATE TABLE Item (
    Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Category VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    CurPrice int NOT NULL, 
    Icon VARCHAR(255)
);