const sequelize = require('../config/connection');
const seedOrganizers = require('./eventManagerSeeds');
const seedVendors = require('./vendorSeeds');
const seedEvents = require('./eventSeeds');
const seedVendorEvents = require('./vendorEventSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOrganizers();
  await seedVendors();
  await seedEvents();
  await seedVendorEvents();

  console.log('\n----- DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
