const { Op } = require("sequelize");
const {
  Ticket,
  Agenda,
  DocumentWorkOrderMantto,
  User,
  Anexo,
  AgendaLegal,
} = require("../../DB_relations");
const getTickets = async (data) => {
  const {
    textsearch = "",
    attribute = "createdAt",
    attribute2 = "createdAt",
    order = "asc",
    page = 0,
    size = -1,
    createDateEnd = "",
    createDateStart = "",
    anexoType,
    enterpriseRequest,
    personRequest,
    docWorkOrder,
    userCreation,
    userUpgrade,
  } = data;
  const requiredAnexoType = anexoType ? true : false;
  const requiredEnterpriseRequest = enterpriseRequest ? true : false;
  const requiredPersonRequest = personRequest ? true : false;
  const requiredDocWorkOrder = docWorkOrder ? true : false;
  const requiredUserCreation = userCreation ? true : false;
  const requiredUserUpgrade = userUpgrade ? true : false;

  // Asegurarse de que size no sea negativo
  const limit = size > 0 ? size : null;
  const offset = limit ? limit * page : 0;
  const existingTickets = await Ticket.findAndCountAll({
    include: [
      {
        model: Agenda,
        as: "PersonRequest",
        where: personRequest && {
          [Op.or]: [
            {
              idDocument: {
                [Op.iLike]: `${personRequest}%`,
              },
            },
            {
              name: {
                [Op.iLike]: `${personRequest}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `${personRequest}%`,
              },
            },
          ],
        },
        required: requiredPersonRequest,
      },
      {
        model: DocumentWorkOrderMantto,
        as: "DocWorkOrder",
        where: docWorkOrder && {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `${docWorkOrder}%`,
              },
            },
            {
              description: {
                [Op.iLike]: `${docWorkOrder}%`,
              },
            },
          ],
        },
        required: requiredDocWorkOrder,
      },
      {
        model: User,
        as: "UserCreation",
        where: userCreation && {
          [Op.or]: [
            {
              userName: {
                [Op.iLike]: `${userCreation}%`,
              },
            },
            {
              name: {
                [Op.iLike]: `${userUpgrade}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `${userUpgrade}%`,
              },
            },
          ],
        },
        required: requiredUserCreation,
      },
      {
        model: User,
        as: "UserUpgrade",
        where: userUpgrade && {
          [Op.or]: [
            {
              userName: {
                [Op.iLike]: `${userCreation}%`,
              },
            },
            {
              name: {
                [Op.iLike]: `${userUpgrade}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `${userUpgrade}%`,
              },
            },
          ],
        },
        required: requiredUserUpgrade,
      },
      {
        model: Anexo,
        as: "AnexoType",
        where: anexoType && {
          [Op.or]: [
            {
              order: {
                [Op.eq]: anexoType,
              },
            },
          ],
        },
        required: requiredAnexoType,
      },
      {
        model: AgendaLegal,
        as: "EnterpriseRequest",
        where: enterpriseRequest && {
          [Op.or]: [
            {
              businesName: {
                [Op.iLike]: `${enterpriseRequest}%`,
              },
            },
          ],
        },
        required: requiredEnterpriseRequest,
      },
    ],
    distinct: true,
    where: {
      [Op.and]: [
        {
          [Op.or]: [
            //filtro por text
            { description: { [Op.iLike]: `%${textsearch}%` } },
          ],
        },
      ],
      createdAt: {
        //para la fecha de creación
        [Op.gte]: createDateStart || "1900-01-01",
        [Op.lte]: createDateEnd || "9999-12-31",
      },
    },
    order: [
      [attribute, order],
      [attribute2, order],
    ],
    limit: limit,
    offset: offset,
  });

  return { geted: true, existingTickets };
};

module.exports = getTickets;
