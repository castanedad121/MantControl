const { AccessControl, Role, Menu } = require("../../DB_relations");

const postAccessControl = async (data) => {
  const { canView, canEdit, canDelete, Role, Menu } = data;

  if (!Role || !Menu) {
    return {
      created: false,
      message: "Missing data for creating accessControl",
    };
  }

  try {
    // Crear el nuevo registro de AccessControl

    const [accessControlNew, created] = await AccessControl.findOrCreate({
      where: { RoleId: Role, MenuId: Menu },
      defaults: {
        canView,
        canEdit,
        canDelete,
      },
    });

    if (created) {
      // Asociar el rol y el menú
      await accessControlNew.setRole(Role);
      await accessControlNew.setMenu(Menu);

      return { created: true, accessControlNew };
    } else {
      return { created: false, message: "The accesscontrol already exists" };
    }
  } catch (error) {
    // Manejar errores, por ejemplo, si ya existe un registro similar
    console.error("Error creating AccessControl:", error);

    return {
      created: false,
      message: "Error creating accessControl",
      error: error.message,
    };
  }
};

module.exports = postAccessControl;
