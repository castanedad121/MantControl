const { Sequelize, DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Menu",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      menuName: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      nameFront: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      level: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      parentMenu: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      order: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      nameForm: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: BOOLEAN,
        allowNull: true,
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
