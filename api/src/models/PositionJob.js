const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PositionJob",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      validity: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      monthlySalary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      weeklySalary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      biWeeklySalary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      dailySalary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      hourlySalary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      wageMinuteSalary: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
