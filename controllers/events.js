const db = require('../models');
const { Event } = db;
const VendorEvent = require('../models/VendorEvent');

const createEvent = async (req, res) => {
  const { name, description, date, time, location } = req.body;

  try {
    const event = await Event.create({
      name,
      description,
      date,
      time,
      location,
    });

    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create the event' });
  }
};

// THIS FUNCTION IS NO LONGER USED 
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();

    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
};

const getEventById = (req, res) => {
    const eventId = req.params.id;
  
    db.Event.findOne({
      where: { id: eventId },
    })
      .then((event) => {
        if (!event) {
          res.status(404).json({ message: 'Event not found' });
          return;
        }
        res.json(event);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve the event' });
      });
  };

const updateEvent = async (req, res) => {
  const eventId = req.params.id; 
  const updatedData = req.body; 

  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      await event.update(updatedData);
      res.status(200).json({ message: 'Event updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update the event' });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id; 

  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      await event.destroy();
      res.status(204).send(); 
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete the event' });
  }
};

const vendorSignUp = async (req, res) => {
  const eventId = req.params.id; 
  const vendorId = req.user.id; 

  try {
    await VendorEvent.create({ vendor_id: vendorId, event_id: eventId });
    res.status(201).json({ message: 'Vendor signed up for the event' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to sign up the vendor for the event' });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  vendorSignUp,
};