const { Op } = require("sequelize");
const { Anexo } = require("../../DB_relations");
const getAnexos = async (data) => {
  const {
    textsearch = "",
    type,
    attribute = "type",
    attribute2 = "order",
    order = "asc",
    page = 0,
    size = -1,
  } = data;

  const options = {
    attributes: ["id", "description", "type", "order", "status", "sourceTable"],
    where: {
      [Op.and]: [
        {
          [Op.or]: [{ description: { [Op.iLike]: `%${textsearch}%` } }],
        },

        type && { type: type },
      ],
    },
    order: [
      [attribute, order],
      [attribute2, order],
    ],
    offset: size > 0 ? size * page : 0, // Aplicar el offset solo si size es positivo
  };

  // Aplicar el limit solo si size es mayor que 0
  if (size > 0) {
    options.limit = size;
  }

  const existingAnexos = await Anexo.findAndCountAll(options);

  return { geted: true, existingAnexos };
};

module.exports = getAnexos;
