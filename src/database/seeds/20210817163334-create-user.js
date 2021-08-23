"use strict";

const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "johndoe@hotmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Luiz Miranda",
          email: "luizmiranda@hotmail.com",
          password_hash: await bcryptjs.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
