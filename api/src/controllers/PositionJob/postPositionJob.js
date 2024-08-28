const { PositionJob } = require("../../DB_relations");

const postPositionJob = async (data) => {
  const {
    description,
    validity,
    monthlySalary,
    weeklySalary,
    biWeeklySalary,
    dailySalary,
    hourlySalary,
    wageMinuteSalary,
    level,
    status,
    PositionFatherId,
  } = data;

  if (!description || !status) {
    return {
      created: false,
      message: "Missing data for creating positionJob",
    };
  }

  try {
    const [positionJobNew, created] = await PositionJob.findOrCreate({
      where: { description, level, status },
      defaults: {
        validity,
        monthlySalary,
        weeklySalary,
        biWeeklySalary,
        dailySalary,
        hourlySalary,
        wageMinuteSalary,
        PositionFatherId,
      },
    });

    if (created) {
      return { created: true, positionJobNew };
    } else {
      return { created: false, message: "The positionJob already exists" };
    }
  } catch (error) {
    // Manejar errores, por ejemplo, si ya existe un registro similar
    console.error("Error creating positionJob:", error);

    return {
      created: false,
      message: "Error creating positionJob",
      error: error.message,
    };
  }
};

module.exports = postPositionJob;
