// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const students = sequelizeClient.define('students', {
    nim: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    current_semester: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    university_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    student_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_recent_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_occupation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_recent_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_occupation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_recent_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_occupation: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    underscored: true
  });

  // eslint-disable-next-line no-unused-vars
  students.associate = function (models) {
    students.belongsTo(models.classes, { onDelete: 'cascade' });
    students.belongsTo(models.study_programs, { onDelete: 'cascade' });
    students.belongsTo(models.registrations, { onDelete: 'cascade' });

    students.belongsTo(models.provinces, { onDelete: 'cascade' });
    students.belongsTo(models.cities, { onDelete: 'cascade' });
    students.belongsTo(models.districts, { onDelete: 'cascade' });
    students.belongsTo(models.subdistricts, { onDelete: 'cascade' });
    students.belongsTo(models.neighbors, { onDelete: 'cascade' });

    students.hasOne(models.preceptors, { onDelete: 'cascade' });

    students.hasMany(models.studies, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return students;
};
