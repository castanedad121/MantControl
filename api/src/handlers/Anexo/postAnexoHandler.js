const postAnexo = require("../../controllers/Anexo/postAnexo");

const postAnexoHandler = async (req, res) => {
  try {
    console.log("postAnexoHandler");
    const newAnexo = await postAnexo(req.body);
    if (newAnexo.created) {
      res.status(200).json(newAnexo);
    } else {
      res.status(400).json(newAnexo);
    }
  } catch (error) {
    console.log(`postAnexoHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postAnexoHandler;
