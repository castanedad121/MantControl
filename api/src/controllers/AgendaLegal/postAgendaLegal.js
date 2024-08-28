const { AgendaLegal } = require("../../DB_relations");

const postAgendaLegal = async (data) => {
  const { idDocument, businesName, email, AnexoTypeId } = data;

  if (!idDocument || !businesName || !email) {
    return {
      created: false,
      message: "Missing data for creating agendaLegal",
    };
  }

  try {
    const [agendaLegalNew, created] = await AgendaLegal.findOrCreate({
      where: { idDocument },
      defaults: { businesName, email, AnexoTypeId },
    });

    if (created) {
      return { created: true, agendaLegalNew };
    } else {
      return { created: false, message: "The agendaLegal already exists" };
    }
  } catch (error) {
    // Manejar errores, por ejemplo, si ya existe un registro similar
    console.error("Error creating agendaLegal:", error);

    return {
      created: false,
      message: "Error creating agendaLegal",
      error: error.message,
    };
  }
};

module.exports = postAgendaLegal;
