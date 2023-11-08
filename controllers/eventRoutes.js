const express = require('express');
const eventController = require('../controllers/events');
const db = require('../models');
const withAuth = require('../utils/auth');

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

// Route to render all events view
router.get('/view', async (req, res) => {
    try {
        const events = await db.Event.findAll();
        const plainEvents = events.map(event => event.get({ plain: true }));

        res.render('allEvents', { events: plainEvents, logged_in: req.session.logged_in});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve events' });
    }
});

// Route to render specific event page
router.get('/view/:id', async (req, res) => {
    const eventId = req.params.id;

    try {
        const event = await db.Event.findByPk(eventId);
        if (event) {
            res.render('eventDetails', { event: event.get({ plain: true }), logged_in: req.session.logged_in});
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve the event' });
    }
});

// Route to render the organizer landing page
router.get('/organizer/landing', withAuth, (req, res) => {
    res.render('organizerLanding', {logged_in: req.session.logged_in}); 
});

// Route to render the vendor landing page
router.get('/vendor/landing', (req, res) => {
    // Assuming you have a 'vendorLanding' Handlebars template
    res.render('vendorLanding', { title: 'Vendor Dashboard' , logged_in: req.session.logged_in});
});

// Route to render the event creation page
router.get('/create', (req, res) => {
    console.log("hello");
    res.render('eventCreation', {logged_in: req.session.logged_in}); 
});

module.exports = router;