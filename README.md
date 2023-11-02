# Love-Craft-HQ
a place for crafters, vendors, and organizers to participate in local &amp; regional craft markets

Love-Craft-HQ

Overview
Love-Craft-HQ is a web application that allows event organizers and vendors to interact with each other and manage their events. It is built with MySQL, Node.js, Express.js, RESTful API, Handlebars.js, and the Sequelize ORM.

Features
User profiles: Both event organizers and vendors can create profiles with their name and contact information.
Event creation: Event organizers can create events and specify the date, time, location, and other details.
Payment processing: Event organizers can take payments from vendors and attendees through a payment API.
Vendor space assignment: Event organizers can assign vending space numbers to vendors.
Organizer-vendor communication: Organizers and vendors can communicate with each other through a messaging form on the event page.
Authentication
Love-Craft-HQ uses JSON Web Tokens (JWTs) for authentication. When a user logs in, they are issued a JWT that contains their user ID and other relevant information. This JWT is then used to authorize subsequent requests to the API.

Protecting API keys and sensitive information
Love-Craft-HQ uses environment variables to protect API keys and other sensitive information. Environment variables are stored outside of the codebase and are not accessible to the public.

Installation
To install Love-Craft-HQ, you will need to have the following installed on your system:

Node.js
MySQL
Sequelize
Once you have all of the required dependencies installed, you can clone the Love-Craft-HQ repository and run the following command to install the dependencies:

npm install
Once the dependencies are installed, you can create a .env file and add your database credentials and other sensitive information to it.

Running Love-Craft-HQ
To run Love-Craft-HQ, you will need to start the MySQL server and then run the following command:

npm start
This will start the Love-Craft-HQ server on port 3000. You can then visit http://localhost:3000 in your web browser to access the application.

Usage
To use Love-Craft-HQ, you will need to create an account. Once you have created an account, you can log in and start creating events or signing up for events.

Event organizers

Event organizers can create events by clicking on the "Create Event" button on the dashboard. Once you have created an event, you can start adding vendors by clicking on the "Vendor Management" tab.

To add a vendor, simply enter their name and contact information and click on the "Add Vendor" button. Once you have added a vendor, you can assign them a vending space number by clicking on the "Assign Vending Space" button.

Event vendors

Event vendors can sign up for events by clicking on the "Events" tab and selecting the event they want to sign up for. Once you have selected the event, click on the "Sign Up" button.

You will then be prompted to enter your payment information. Once you have entered your payment information, click on the "Submit" button to complete your registration.

Organizer-vendor communication

Organizers and vendors can communicate with each other through the messaging form on the event page. To access the messaging form, simply click on the "Messages" tab on the event page.

To send a message, simply enter your message in the text box and click on the "Send" button.

API
Love-Craft-HQ provides a RESTful API that allows developers to interact with the application. The API is documented using Swagger.

To access the API documentation, visit http://localhost:3000/api-docs/ in your web browser.

Conclusion
Love-Craft-HQ is a powerful web application that can help event organizers and vendors manage their events. It is built with modern technologies and provides a variety of features that make it easy to use.