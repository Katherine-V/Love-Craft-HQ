const { EventManager } = require('../models');

const eventManagerData = [
  {
    username: 'EventManager1',
    password: 'yourpassword1',
  },
  {
    username: 'EventManager2',
    password: 'yourpassword2', 
  },
  {
    username: 'EventManager3',
    password: 'yourpassword3', 
  },
];


const seedEventManagers = () => EventManager.bulkCreate(eventManagerData);

module.exports = seedEventManagers;