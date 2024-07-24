const Frequency = require('./frequency');
const Location = require('./location');
const Listener = require('./listener');
const Host = require('./host');

// Frequency belongs to Location
Frequency.belongsTo(Location, {
  foreignKey: 'location_id',
  as: 'location',
  onDelete: 'CASCADE',
});

// Location can have many Frequencies
Location.hasMany(Frequency, {
  foreignKey: 'location_id',
  as: 'frequencies',
});

// Frequency can have many Hosts
Frequency.hasMany(Host, {
  foreignKey: 'frequency_id',
  as: 'hosts',
  onDelete: 'CASCADE',
});

// Host belongs to Frequency
Host.belongsTo(Frequency, {
  foreignKey: 'frequency_id',
  as: 'frequency',
});

// Frequency belongs to Listener
Frequency.belongsTo(Listener, {
  foreignKey: 'listener_id',
  as: 'listener',
  onDelete: 'CASCADE',
});

// Listener can have many Frequencies
Listener.hasMany(Frequency, {
  foreignKey: 'listener_id',
  as: 'frequencies',
});

module.exports = { Frequency, Location, Listener, Host };
