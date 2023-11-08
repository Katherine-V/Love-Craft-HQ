const express = require('express');
const { EventManager, Vendor } = require('../models');
const bcrypt = require('bcrypt');

const router = express.Router();

// Existing routes to fetch and return users...
// Make sure not to send the password back in the response

// Login route for Event Manager
router.post('/login/event-manager', async (req, res) => {
  try {
    const eventData = await EventManager.findOne({ where: { username: req.body.username } });
    if (!eventData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    //const validPassword = eventData.checkPassword(req.body.password);
    //if (!validPassword) {
    //  res.status(400).json({ message: 'Incorrect username or password, please try again' });
    //  return;
    //}

    req.session.save(() => {
      req.session.user_id = eventData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: eventData, message: 'You are now logged in!' });
    });

    // Add code here to handle session/cookie if you're using them
    // res.json({ user: eventData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route for Vendor
router.post('/login/vendor', async (req, res) => {
  try {
    const vendorData = await Vendor.findOne({ where: { username: req.body.username } });
    if (!vendorData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // const validPassword = vendorData.checkPassword(req.body.password);
    // if (!validPassword) {
    //   res.status(400).json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

    req.session.save(() => {
      req.session.user_id = vendorData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: vendorData, message: 'You are now logged in!' });
    });

    // Add code here to handle session/cookie if you're using them
    //res.json({ user: vendorData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
