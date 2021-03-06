module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('my_courses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      courseId: { type: Sequelize.INTEGER, field: 'course_id' },
      title: Sequelize.STRING(100),
      description: Sequelize.TEXT,
      imageUrl: { type: Sequelize.STRING, field: 'image_url' },
      courseInfoUrl: { type: Sequelize.STRING, field: 'course_info_url' },
      fkUserId: { type: Sequelize.INTEGER, field: 'fk_user_id' },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('my_courses');
  },
};
