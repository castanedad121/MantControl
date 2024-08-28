const postAgendaLegal = require("../../controllers/AgendaLegal/postAgendaLegal");

const postAgendaLegalHandler = async (req, res) => {
  try {
    console.log("postAgendaLegalHandler");
    const newAgendaLegal = await postAgendaLegal(req.body);
    if (newAgendaLegal.created) {
      res.status(200).json(newAgendaLegal);
    } else {
      res.status(400).json(newAgendaLegal);
    }
  } catch (error) {
    console.log(`postAgendaLegalHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postAgendaLegalHandler;
