const express = require('express');
const eventController = require('../controllers/events');

const router = express.Router();

// API route for creating a new event
router.post('/events', eventController.createEvent);

// API route for retrieving a list of events
router.get('/events', eventController.getAllEvents);

// API route for retrieving a specific event by its ID
router.get('/events/:id', eventController.getEventById);

// API route for updating an existing event
router.put('/events/:id', eventController.updateEvent);

// API route for deleting an event
router.delete('/events/:id', eventController.deleteEvent);

// API route for vendor sign-up for an event
router.post('/events/:id/signup', eventController.vendorSignUp);

module.exports = router;