'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelName:'indigo234',
      capacity:300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelName:'boeing876',
      capacity:600,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelName:'airIndia109',
      capacity:300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelName:'emirates',
      capacity:600,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',{
      [Op.or]:[
        { modelName:'indigo234', modelName:'boeing876', modelName:'airIndia109',modelName:'emirates',}
      ]

      
    })
  }
};
