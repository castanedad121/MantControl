const postLogin = require("../../controllers/user/postLogin");

const postLoginHandler = async (req, res) => {
  try {
    console.log("postLoginHandler");
    const login = await postLogin(req.body);
    const { message, loginUser, token, access } = login;
    console.log(access);
    if (access) {
      res.status(200).json({ message, loginUser, token, access });
    } else {
      res.status(400).json(login);
    }
  } catch (error) {
    console.log(`postLoginHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postLoginHandler;
