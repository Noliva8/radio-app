const sequelize = require('../config/connection');
const { Frequency, Location, Listener, Host } = require('../models');

const frequencyData = require('./frequencyData.json');
const locationData = require('./locationData.json');
const listenerData = require('./listenerData.json');
const hostData = require('./hostData.json');

const seedDatabase = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed Locations
    const locations = await Location.bulkCreate(locationData, {
      individualHooks: true,
      returning: true,
    });

    // Seed Listeners
    const listeners = await Listener.bulkCreate(listenerData, {
      individualHooks: true,
      returning: true,
    });

    // Seed Hosts
    const hosts = await Host.bulkCreate(hostData, {
      individualHooks: true,
      returning: true,
    });

    // Seed Frequencies
    const frequencies = await Frequency.bulkCreate(frequencyData, {
      individualHooks: true,
      returning: true,
    });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the process
    process.exit(0);
  }
};

seedDatabase();
