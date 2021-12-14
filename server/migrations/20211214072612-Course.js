module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: Sequelize.STRING(100),
      description: Sequelize.TEXT,
      imageUrl: Sequelize.STRING,
      courseInfoUrl: Sequelize.STRING,
      fkUserId: { type: Sequelize.INTEGER, field: 'fk_user_id' },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('courses');
  },
};
