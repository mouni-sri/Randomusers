Build a REST API to generate a summary of user data
=======================


Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)


Features
--------

- Fetching users data from https://randomuser.me using **randomuser** nodejs package.
- Hackathon starter(https://github.com/sahat/hackathon-starter) nodejs boiler plate is used.
- Storing users data into mongodb.
- pug template engine is used to display the data.


Prerequisites
-------------

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 8.0+](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/sahat/hackathon-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.


Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **controllers**/randomUser.js      | Controller for User data mangement                           |
| **controllers**/home.js            | Controller for home page (index).                            |
| **models**/randomUser.js           | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **views**/layout.pug               | Base template.                                               |
| **views**/randomuser.pug           | Users sumary template.                                       |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.
Just don't forget to update `extends ../layout`  and corresponding
`res.render()` paths in controllers.

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| body-parser                     | Node.js body parsing middleware.                                        |
| connect-mongo                   | MongoDB session store for Express.                                      |
| express                         | Node.js web framework.                                                  |
| mongoose                        | MongoDB ODM.                                                            |
| morgan                          | HTTP request logger middleware for node.js.                             |
| multer                          | Node.js middleware for handling `multipart/form-data`.                  |
| pug (jade)                      | Template engine for Express.                                            |
| request                         | Simplified HTTP request library.                                        |
| randomuser                      | nodejs library for https://randomuser.me REST API                       |
| async                           | nodejs library used to work with asynchronous javascript                |

