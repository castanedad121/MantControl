const { Sequelize, DataTypes, UniqueConstraintError } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "AgendaLegal",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      idDocument: {
        type: DataTypes.TEXT,
        allowNull: true,
        Unique: true,
      },
      businesName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
