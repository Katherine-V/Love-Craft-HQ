const { OrganizerEvent } = require('../models'); 

const organizerEventData = [
  {
    organizer_id: 1, 
    event_id: 1, 
  },
  {
    organizer_id: 2,
    event_id: 2,
  },
  {
    organizer_id: 3,
    event_id: 3,
  },
];

const seedOrganizerEvents = () => OrganizerEvent.bulkCreate(organizerEventData);

module.exports = seedOrganizerEvents;