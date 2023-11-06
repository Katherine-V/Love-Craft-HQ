const { Vendor } = require('../models');

const vendorData = [
  {
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    phone_number: '111-222-3333',
    username: 'vendoruser1',
    password: 'vendorpassword1',
  },
  {
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    phone_number: '444-555-6666',
    username: 'vendoruser2',
    password: 'vendorpassword2',
  },
  {
    name: 'Vendor 3',
    email: 'vendor3@example.com',
    phone_number: '777-888-9999',
    username: 'vendoruser3',
    password: 'vendorpassword3', 
  },
];

const seedVendors = () => Vendor.bulkCreate(vendorData);

module.exports = seedVendors;
