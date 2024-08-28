const getAnexos = require("../../controllers/Anexo/getAnexos");

const getAnexosHandler = async (req, res) => {
  try {
    console.log("getAnexosHandler");
    const findAnexos = await getAnexos(req.query);
    if (findAnexos.geted) {
      res.status(200).json(findAnexos);
    } else {
      res.status(400).json({ geted: false, message: "No anexos found" });
    }
  } catch (error) {
    console.log(`getAnexosHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAnexosHandler;
