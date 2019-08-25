DROP TABLE IF EXISTS HISTORY;

CREATE TABLE History (
    FOREIGN KEY(User_id) REFERENCES User(Id),
    FOREIGN KEY(Item_id) REFERENCES Item(Id),
    Date VARCHAR(255),
    AmountPaid int, 
);
