#!/bin/bash
rm sqlite.db
sqlite3 sqlite.db < createTables.sql

echo ".mode csv
.import ./itemsList.csv TempItem
Insert INTO Item(Name, Category, CurPrice, Icon) Select * FROM TempItem;
.read userInsert.sql
.read packItemInsert.sql
.read mockHistoryinsert.sql
.quit" |
    sqlite3 sqlite.db