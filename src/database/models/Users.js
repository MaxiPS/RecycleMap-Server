const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");

class Users extends Model {}

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name field can't be empty",
        },
        isAlpha: {
          args: true,
          msg: "Name can only contain letters",
        },
        len: {
          args: [2, 255],
          msg: "Name length must be between 2 and 255",
        },
      },
    },
    first_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First last name field can't be empty",
        },
        isAlpha: {
          args: true,
          msg: "First last name field can only contains letters",
        },
        len: {
          args: [2, 255],
          msg: "First last name length must be between 2 and 255",
        },
      },
    },
    second_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Second last name field can't be empty",
        },
        isAlpha: {
          args: true,
          msg: "Second last name field can only contains letters",
        },
        len: {
          args: [2, 255],
          msg: "Second last name length must be between 2 and 255",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Please provide a valid email",
        },
        notNull: {
          msg: "Email can't be empty",
        },
        len: {
          args: [5, 255],
          msg: "Email length must be between 5 and 255",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password field can't be empty",
        },
      },
    },
  },
  {
    modelName: "Users",
    sequelize,
  }
);

module.exports = Users;
