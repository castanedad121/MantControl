const { Menu } = require("../../DB_relations");
const postMenu = async (data) => {
  const {
    menuName,
    nameFront,
    description,
    order,
    path,
    nameForm,
    status,
    level,
    parentMenu,
  } = data;
  if (menuName && description && order && status && level && parentMenu) {
    const [menuNew, created] = await Menu.findOrCreate({
      where: { menuName },
      defaults: {
        nameFront,
        description,
        order,
        path,
        nameForm,
        status,
        level,
        parentMenu,
      },
    });
    if (created) {
      return { created: true, menuNew };
    } else {
      return { created: false, message: "The menu already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating menu" };
  }
};

module.exports = postMenu;
