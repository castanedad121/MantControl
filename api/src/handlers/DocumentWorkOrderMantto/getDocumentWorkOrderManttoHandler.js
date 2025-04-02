const getDocumentWorkOrderMantto = require("../../controllers/DocumentWorkOrderMantto/getDocumentWorkOrderMantto");

const getDocumentWorkOrderManttoHandler = async (req, res) => {
  try {
    console.log("getDocumentWorkOrderManttoHandler ");
    const findDocumentWorkOrderMantto = await getDocumentWorkOrderMantto(
      req.query
    );
    if (findDocumentWorkOrderMantto.geted) {
      res.status(200).json(findDocumentWorkOrderMantto);
    } else {
      res
        .status(400)
        .json({ geted: false, message: "No document work order mantto found" });
    }
  } catch (error) {
    console.log(`getDocumentWorkOrderManttoHandler  ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getDocumentWorkOrderManttoHandler;
