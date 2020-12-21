# to-do-list-backend

**TO_DO LIST Backend** is a project which will handle the backend of to-do list it will create new task find a task  update a task and delete here we have also created user and provided user signup login and crud operations on user the data is stored in mongo db

# Content

<hr>

- **app.js** this is the file in which we are creating express server and listening the server and we are connecting to database using mongoose

- **routes** this folder contains file and express router are created in each file **userRoute.js** which has the Router all the routes for getting a user or adding a user and updating and deleting user
**taskRoute.js**this file has a express router and routes are created for adding new task deleting a task updating a task and getting a task by id
- **controller** in this folder we have the function which are used imported and used in routes

**usercontroller.js** this file contains middleware function for performing crud operation on user

**taskcontroller** this file  contains middleware for performing crud operations on task 

**uservalidation.js**this file contain all validation and verification function for user

**models** is this folder schema models are created for task and user

**userSchema**in this schema is created for user with several fields

**taskSchema**in this schema is created for task with several fields 

**config.env**then you will need to create a file call config.env in which you will store environment variables and store your PORT and database URL in it

**package.json**this json file contain scripts which you have added keywords and dependencies which you have installed

# dependencies
dependencies youll need to install

1) npm install express
2) npm install mongoose
3) npm install mongoose
4) npm install dotenv
5) npm install uniqid
