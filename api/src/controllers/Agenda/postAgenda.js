const { Agenda } = require("../../DB_relations");

const postAgenda = async (data) => {
  const {
    idDcoument,
    name,
    lastName,
    email,
    PositionJobId,
    AnexoTypeId,
    AgendaLegalId,
  } = data;

  if (!idDcoument || !name || !lastName || !email) {
    return {
      created: false,
      message: "Missing data for creating agenda",
    };
  }

  try {
    const [agendaNew, created] = await Agenda.findOrCreate({
      where: { idDcoument },
      defaults: {
        name,
        lastName,
        email,
        PositionJobId,
        AnexoTypeId,
        AgendaLegalId,
      },
    });

    if (created) {
      return { created: true, agendaNew };
    } else {
      return { created: false, message: "The agenda already exists" };
    }
  } catch (error) {
    // Manejar errores, por ejemplo, si ya existe un registro similar
    console.error("Error creating agenda:", error);

    return {
      created: false,
      message: "Error creating agenda",
      error: error.message,
    };
  }
};

module.exports = postAgenda;
