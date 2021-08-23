import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'Name must be between 3 and 50 characters',
            },
          },
        },
        surname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'Surname must be between 3 and 50 characters',
            },
          },
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email Invalid',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: 'Age must be integer',
            },
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          validate: {
            isFloat: {
              msg: 'Weight must be integer or float',
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          validate: {
            isFloat: {
              msg: 'Height must be integer or float',
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
}
