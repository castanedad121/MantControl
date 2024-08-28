const bcrypt = require("bcrypt");
const { User, Role } = require("../../DB_relations");
const postUserRegister = async (data) => {
  const { userName, email, password, name, lastName, image, status, Role } =
    data;
  if (userName && email && password && name && lastName && status && Role) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [userNew, created] = await User.findOrCreate({
      where: { userName, email },
      defaults: {
        password: hashedPassword,
        name,
        lastName,
        RoleId: Role,
        image: image ? image : "",
        status,
      },
    });
    if (created) {
      // await userNew.setRole(Role);
      // Excluir la contraseña de la salida JSON
      const userWithoutPassword = userNew.toJSON();
      delete userWithoutPassword.password;

      return { created: true, user: userWithoutPassword };
    } else {
      return { created: false, message: "The user already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating user" };
  }
};

module.exports = postUserRegister;
