<h1 align="center"> MRA Vitamins Store </h1>

MRA Vitamins store is a vitamins marketplace that connects eco-friendly, sustanably sourced vitamin suppliers with customers.  This is a place where people can shop knowing that the vitamins they are consuming are sustainably sourced.  

This application uses node packages, mysql, in combination with sequelize, sessions, and email validator to provide a framework for future development.  We use restful api's and the handlebars template engine to dynamically populate product pages with useful information for the end user.

This was a collaborative effort.  


<h2 align="center"> MVP </h2>

Due to time constraints, for our MVP we wanted to achieve the following.

+ Users can signup, passwords are protected using bcrypt and will not be stored in plaintext.

- Users can login, and access a profile page, where they can edit their information.  Passwords are handled using bcrypt.

+ The frontend of the website will be handled by the template engine: handlebars, and will display different information dependent on user input.

- The product pages will be dynamically populated with handlebars using api calls to request data from a database.

+ Use the third party node package Email Validator, to check if users are submitting legitamate emails on the signup page.

We have reached all of these goals for the MVP.  


