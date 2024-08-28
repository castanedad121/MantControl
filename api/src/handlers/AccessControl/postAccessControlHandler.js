const postAccessControl = require("../../controllers/AccessControl/postAccessControl");

const postAccessControlHandler = async (req, res) => {
  try {
    console.log("postAccessControlHandler");
    const newAccessControl = await postAccessControl(req.body);
    if (newAccessControl.created) {
      res.status(200).json(newAccessControl);
    } else {
      res.status(400).json(newAccessControl);
    }
  } catch (error) {
    console.log(`postAccessControlHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postAccessControlHandler;
