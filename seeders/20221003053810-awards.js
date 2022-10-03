'use strict';

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
    await queryInterface.bulkInsert('Awards', [
      {
        awards_name: 'Voucher 50.000',
        awards_type: 'Vouchers',
        awards_price: 75000,
        awards_image: 'https://cdn.golden-course.com/wp-content/uploads/2019/05/Voucher-50rb.png',
      },
      {
        awards_name: 'Nintendo Switch v.2',
        awards_type: 'Product',
        awards_price: 3000000,
        awards_image: 'https://media.dinomarket.com/docs/imgTD/2018-09/pic_Nintendo_Switch_neon_1_010918150955_ll.jpg.jpg',
      },      {
        awards_name: 'Playstation 5',
        awards_type: 'Product',
        awards_price: 5000000,
        awards_image: 'https://p-id.ipricegroup.com/uploaded_cd482e8a8f7c12471a49192e25fb64ab.jpg',
      },
      {
        awards_name: 'Spotify 1 Month',
        awards_type: 'Others',
        awards_price: 500,
        awards_image: 'https://media.suara.com/pictures/653x366/2021/07/20/90521-spotify.webp',
      },
      {
        awards_name: 'Spotify 3 Month',
        awards_type: 'Others',
        awards_price: 500,
        awards_image: 'https://media.suara.com/pictures/653x366/2021/07/20/90521-spotify.webp',
      },
      {
        awards_name: 'Spotify 5 Months',
        awards_type: 'Others',
        awards_price: 500,
        awards_image: 'https://media.suara.com/pictures/653x366/2021/07/20/90521-spotify.webp',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

      await queryInterface.bulkDelete('Awards', null, {});
  }
};
