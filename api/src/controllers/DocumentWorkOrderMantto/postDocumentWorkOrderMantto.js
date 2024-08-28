const { DocumentWorkOrderMantto } = require("../../DB_relations");

const postDocumentWorkOrderMantto = async (data) => {
  const {
    name,
    description,
    date,
    costCenter,
    AgendaTechnicalSupportId,
    AnexoTypeId,
    AnexoCategoryId,
  } = data;

  if (!name || !date) {
    return {
      created: false,
      message: "Missing data for creating documentWorkOrderMantto",
    };
  }

  try {
    const [documentWorkOrderManttoNew, created] =
      await DocumentWorkOrderMantto.findOrCreate({
        where: { name },
        defaults: {
          description,
          date,
          costCenter,
          AgendaTechnicalSupportId,
          AnexoTypeId,
          AnexoCategoryId,
        },
      });

    if (created) {
      return { created: true, documentWorkOrderManttoNew };
    } else {
      return {
        created: false,
        message: "The documentWorkOrderMantto already exists",
      };
    }
  } catch (error) {
    // Manejar errores, por ejemplo, si ya existe un registro similar
    console.error("Error creating documentWorkOrderMantto:", error);

    return {
      created: false,
      message: "Error creating documentWorkOrderMantto",
      error: error.message,
    };
  }
};

module.exports = postDocumentWorkOrderMantto;
