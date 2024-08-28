const postTicket = require("../../controllers/Ticket/postTicket");

const postTicketHandler = async (req, res) => {
  try {
    console.log("postTicketHandler");
    const newTicket = await postTicket(req.body);
    if (newTicket.created) {
      res.status(200).json(newTicket);
    } else {
      res.status(400).json(newTicket);
    }
  } catch (error) {
    console.log(`postTicketHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postTicketHandler;
