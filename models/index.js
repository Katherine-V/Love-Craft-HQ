const User = require('./User');
const EventManager = require('./EventManager');
const Vendor = require('./Vendor');

// Assume that a User can be an EventManager or a Vendor, but not both.
// And an EventManager can have multiple Vendors.

// This associates a User with an EventManager
User.hasOne(EventManager, {
  foreignKey: 'user_id',
});

EventManager.belongsTo(User, {
  foreignKey: 'user_id',
});

// This associates a User with a Vendor
User.hasOne(Vendor, {
  foreignKey: 'user_id',
});

Vendor.belongsTo(User, {
  foreignKey: 'user_id',
});

// This associates an EventManager with multiple Vendors
EventManager.hasMany(Vendor, {
  foreignKey: 'event_manager_id',
});

Vendor.belongsTo(EventManager, {
  foreignKey: 'event_manager_id',
});

module.exports = { User, EventManager, Vendor };
