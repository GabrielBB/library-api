CREATE TABLE IF NOT EXISTS "Book" (
        ID    INTEGER PRIMARY KEY AUTOINCREMENT,
        Title   TEXT,
        "Description" TEXT,
        Author TEXT,
        CreationDate  DATE
);

INSERT INTO Book (Title, "Description", Author, CreationDate) 
VALUES ('Cracking The Coding Interview', 'A tough one', 'Some woman', date('now'));