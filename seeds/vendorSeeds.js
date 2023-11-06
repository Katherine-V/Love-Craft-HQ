const { Vendor } = require('../models');

const vendorData = [
  {
    name: 'Vendor 1',
    email: 'vendor1@example.com',
    phone_number: '987-654-3210',
  },
  {
    name: 'Vendor 2',
    email: 'vendor2@example.com',
    phone_number: '111-222-3333',
  },
  {
    name: 'Vendor 3',
    email: 'vendor3@example.com',
    phone_number: '777-888-9999',
  },
];

const seedVendors = () => Vendor.bulkCreate(vendorData);

module.exports = seedVendors;