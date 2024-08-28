const postMenu = require("../../controllers/Menu/postMenu");

const postMenuHandler = async (req, res) => {
  try {
    console.log("postMenuHandler");
    const newMenu = await postMenu(req.body);
    if (newMenu.created) {
      res.status(200).json(newMenu);
    } else {
      res.status(400).json(newMenu);
    }
  } catch (error) {
    console.log(`postMenuHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postMenuHandler;
