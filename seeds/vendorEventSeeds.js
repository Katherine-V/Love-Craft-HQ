const { VendorEvent } = require('../models'); // Adjust the import path as needed

const vendorEventData = [
  {
    vendor_id: 1, // Vendor ID (match with the vendor created)
    event_id: 1,  // Event ID (match with the event created)
  },
  {
    vendor_id: 2,
    event_id: 2,
  },
  {
    vendor_id: 3,
    event_id: 3,
  },
];

const seedVendorEvents = () => VendorEvent.bulkCreate(vendorEventData);

module.exports = seedVendorEvents;