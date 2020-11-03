'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Alex',
        lastName: 'Petroski',
        email: 'alexpetroski@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: 'Defaultpassword1!'
      },
      {
        firstName: 'Anna',
        lastName: 'Kay',
        email: 'akayz@gg.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: 'Defaultpassword1!'
      },
      {
        firstName: 'Danny',
        lastName: 'P',
        email: 'dannyp@lol.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: 'Defaultpassword1!'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
