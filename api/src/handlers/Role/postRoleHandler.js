const postRole = require("../../controllers/Role/postRole");

const postRoleHandler = async (req, res) => {
  try {
    console.log("postRoleHandler");
    const newRole = await postRole(req.body);
    if (newRole.created) {
      res.status(200).json(newRole);
    } else {
      res.status(400).json(newRole);
    }
  } catch (error) {
    console.log(`postRoleHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postRoleHandler;
