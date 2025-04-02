const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ticket",
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
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      file: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      promisedDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
