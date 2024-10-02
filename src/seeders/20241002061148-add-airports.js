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
   await queryInterface.bulkInsert('Airports',[
    {
      name:'Indira Gandhi International Airport',
      code:'DEL',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name:'Chhatrapati Shivaji Maharaj International Airport',
      code:'BOM',
      createdAt: new Date(),
      updatedAt: new Date()
      
    },
    {
      name:'Netaji Subhash Chandra Bose International Airport',
      code:'CCU',
      createdAt: new Date(),
      updatedAt: new Date()
      
    },
    {
      name:'Rajiv Gandhi International Airport',
      code:'HYD',
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
    await queryInterface.bulkDelete('Airports',{

      [Op.or]:[
        {code:'DEL'},
        {code:'BOM'},
        { code:'CCU',},
        { code:'HYD'},
       


      ]
    })
  }
};
