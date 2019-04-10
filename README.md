Library API for Soluciones GBH

This is a simple REST API made with Node JS and an In-Memory SQLITE database. 

To make the database migration pretty simple there is a seed.sql file under /src/helpers/. The application looks for this file and makes an execution to the database everytime it starts. This will make it simple to get you up and running without any configuration.

The reason why there is a "views" folder in this REST API is because i wanted to imitate the way Google Chrome renders PDF files. So, i used CSS inside an HTML file and used a view engine to parse that HTML with the book content. This way when you specify that you want the HTML version of a book page, it will look just like a real book page!

-----------------------------------

How to configure the app:

Make sure you have Node JS 8 or later in your machine and run this command in the project folder:

npm install

------------------------------------

How to automatically test the app:

This project uses unit tests. Run this command:

npm test

-------------------------------------

How to run:

npm start

-------------------------------------

Example endpoints:

http://localhost:3000/book/


http://localhost:3000/book/1/


http://localhost:3000/book/1/page/1


http://localhost:3000/book/1/page/3/html
