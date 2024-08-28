const { Sequelize, DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "AccessControl",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      canView: {
        type: BOOLEAN,
        allowNull: true,
      },
      canEdit: {
        type: BOOLEAN,
        allowNull: true,
      },
      canDelete: {
        type: BOOLEAN,
        allowNull: true,
      },
    },
    {
      paranoid: true, // Habilita eliminación suave
    }
  );
};
