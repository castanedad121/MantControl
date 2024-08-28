const postDocumentWorkOrderMantto = require("../../controllers/DocumentWorkOrderMantto/postDocumentWorkOrderMantto");

const postDocumentWorkOrderManttoHandler = async (req, res) => {
  try {
    console.log("postDocumentWorkOrderManttoHandler");
    const newDocumentWorkOrderMantto = await postDocumentWorkOrderMantto(
      req.body
    );
    if (newDocumentWorkOrderMantto.created) {
      res.status(200).json(newDocumentWorkOrderMantto);
    } else {
      res.status(400).json(newDocumentWorkOrderMantto);
    }
  } catch (error) {
    console.log(`postDocumentWorkOrderManttoHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postDocumentWorkOrderManttoHandler;
