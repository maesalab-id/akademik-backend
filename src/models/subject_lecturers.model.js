// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const subject_lecturers = sequelizeClient.define('subject_lecturers', {
    mid_test_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    final_test_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    presence_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    underscored: true
  });

  // eslint-disable-next-line no-unused-vars
  subject_lecturers.associate = function (models) {
    subject_lecturers.belongsTo(models.subjects, { onDelete: 'cascade' });
    subject_lecturers.belongsTo(models.lecturers, { onDelete: 'cascade' });
    subject_lecturers.hasMany(models.hours, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return subject_lecturers;
};
