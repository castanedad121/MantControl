const getTickets = require("../../controllers/Ticket/getTickets");

const getTicketsHandler = async (req, res) => {
  try {
    console.log("getTicketsHandler");
    const findUTickets = await getTickets(req.query);
    if (findUTickets.geted) {
      res.status(200).json(findUTickets);
    } else {
      res.status(400).json({ geted: false, message: "No tickets found" });
    }
  } catch (error) {
    console.log(`getTicketsHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getTicketsHandler;
