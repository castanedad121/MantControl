const { Anexo } = require("../../DB_relations");
const postAnexo = async (data) => {
  const { description, type, status, sourceTable } = data;
  if (description && type && status && sourceTable) {
    const [anexoNew, created] = await Anexo.findOrCreate({
      where: { description, type, status, order },
      defaults: {
        sourceTable,
      },
    });
    if (created) {
      return { created: true, anexoNew };
    } else {
      return { created: false, message: "The anexo already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating anexo" };
  }
};

module.exports = postAnexo;
