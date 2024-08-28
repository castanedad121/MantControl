const postAgenda = require("../../controllers/Agenda/postAgenda");

const postAgendaHandler = async (req, res) => {
  try {
    console.log("postAgendaHandler");
    const newAgenda = await postAgenda(req.body);
    if (newAgenda.created) {
      res.status(200).json(newAgenda);
    } else {
      res.status(400).json(newAgenda);
    }
  } catch (error) {
    console.log(`postAgendaHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postAgendaHandler;
