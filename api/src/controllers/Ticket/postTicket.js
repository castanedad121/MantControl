const { Ticket } = require("../../DB_relations");

const postTicket = async (data) => {
  const {
    description,
    status,
    PersonRequestId,
    EnterpriseRequestId,
    DocWorkOrderId,
    UserCreationId,
    UserUpgradeId,
    AnexoTypeId,
  } = data;

  if (!description || !dateCreation || !status) {
    return {
      created: false,
      message: "Missing data for creating documentWorkOrderMantto",
    };
  }

  try {
    const ticketNew = await Ticket.create({
      description,
      status,
      PersonRequestId,
      EnterpriseRequestId,
      DocWorkOrderId,
      UserCreationId,
      UserUpgradeId,
      AnexoTypeId,
    });

    if (ticketNew.id) {
      return { created: true, ticketNew };
    } else {
      return {
        created: false,
        message: "The Ticket already exists",
      };
    }
  } catch (error) {
    // Manejar errores, por ejemplo, si ya existe un registro similar
    console.error("Error creating Ticket:", error);

    return {
      created: false,
      message: "Error creating Ticket",
      error: error.message,
    };
  }
};

module.exports = postTicket;
