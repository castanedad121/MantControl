const bcrypt = require("bcrypt");
const {
  User,
  Role,
  AccessControl,
  Menu,
  Agenda,
  AgendaLegal,
} = require("../../DB_relations");
const { generateAccessToken } = require("../../functions/generateAccessToken");

const postLogin = async (data) => {
  const { userName, password } = data;
  if (!userName || !password) {
    return { message: "Missing data for login user" };
  } else {
    const user = await User.findOne({
      where: { userName },
      include: [
        {
          model: Role,
          include: [
            {
              model: Menu,
              through: { attributes: [] },
              order: [["order", "ASC"]],
            },
          ],
        },
        {
          model: Agenda,
          include: [{ model: AgendaLegal }],
        },
      ],
    });

    if (!user) {
      return { message: "Invalid credentials" };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { message: "Invalid credentials" };
    }
    if (passwordMatch) {
      const loginUser = user.dataValues;
      delete loginUser.password;
      const accessToken = generateAccessToken(loginUser);

      return {
        message: "User authenticated",
        loginUser,
        token: accessToken,
        access: true,
      };
    }
  }
};

module.exports = postLogin;
