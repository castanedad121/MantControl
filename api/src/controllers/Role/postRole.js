const { Role } = require("../../DB_relations");
const postRole = async (data) => {
  const { roleName, description } = data;
  if (roleName && description) {
    const [roleNew, created] = await Role.findOrCreate({
      where: { roleName },
      defaults: {
        description,
      },
    });
    if (created) {
      return { created: true, roleNew };
    } else {
      return { created: false, message: "The role already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating role" };
  }
};

module.exports = postRole;
