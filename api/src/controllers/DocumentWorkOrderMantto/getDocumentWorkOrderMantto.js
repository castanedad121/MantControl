const { Op } = require("sequelize");
const {
  Agenda,
  DocumentWorkOrderMantto,
  Anexo,
} = require("../../DB_relations");
const getDocumentWorkOrderMantto = async (data) => {
  const {
    textsearch = "",
    attribute = "createdAt",
    attribute2 = "createdAt",
    order = "asc",
    page = 0,
    size = -1,
    createDateEnd = "",
    createDateStart = "",
    agendaTechnicalSupport,
    anexoType,
    anexoCategory,
  } = data;
  const requiredAnexoType = anexoType ? true : false;
  const requiredAnexoCategory = anexoCategory ? true : false;
  const requiredAgendaTechnicalSupport = agendaTechnicalSupport ? true : false;

  // Asegurarse de que size no sea negativo
  const limit = size > 0 ? size : null;
  const offset = limit ? limit * page : 0;

  const existingDocumentWorkOrderMantto =
    await DocumentWorkOrderMantto.findAndCountAll({
      include: [
        {
          model: Agenda,
          as: "AgendaTechnicalSupport",
          where: agendaTechnicalSupport && {
            [Op.or]: [
              {
                idDocument: {
                  [Op.iLike]: `${agendaTechnicalSupport}%`,
                },
              },
              {
                name: {
                  [Op.iLike]: `${agendaTechnicalSupport}%`,
                },
              },
              {
                lastName: {
                  [Op.iLike]: `${agendaTechnicalSupport}%`,
                },
              },
            ],
          },
          required: requiredAgendaTechnicalSupport,
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
          model: Anexo,
          as: "AnexoCategory",
          where: anexoCategory && {
            [Op.or]: [
              {
                order: {
                  [Op.eq]: anexoCategory,
                },
              },
            ],
          },
          required: requiredAnexoCategory,
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

  return { geted: true, existingDocumentWorkOrderMantto };
};

module.exports = getDocumentWorkOrderMantto;
