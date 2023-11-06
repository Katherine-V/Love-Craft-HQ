const { Event } = require('../models'); // Adjust the import path as needed

const eventData = [
  {
    name: 'Event 1',
    description: 'Description for Event 1',
    date: '2023-11-01',
    time: '12:00:00',
    location: 'Location 1',
  },
  {
    name: 'Event 2',
    description: 'Description for Event 2',
    date: '2023-11-05',
    time: '14:00:00',
    location: 'Location 2',
  },
  {
    name: 'Event 3',
    description: 'Description for Event 3',
    date: '2023-11-10',
    time: '15:30:00',
    location: 'Location 3',
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;