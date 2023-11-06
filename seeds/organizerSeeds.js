const { Organizer } = require('../models'); 

const organizerData = [
  {
    name: 'Organizer 1',
    email: 'organizer1@example.com',
    phone_number: '123-456-7890',
    state: 'State 1',
    city: 'City 1',
  },
  {
    name: 'Organizer 2',
    email: 'organizer2@example.com',
    phone_number: '987-654-3210',
    state: 'State 2',
    city: 'City 2',
  },
  {
    name: 'Organizer 3',
    email: 'organizer3@example.com',
    phone_number: '555-555-5555',
    state: 'State 3',
    city: 'City 3',
  },
];

const seedOrganizers = () => Organizer.bulkCreate(organizerData);

module.exports = seedOrganizers;