const postPositionJob = require("../../controllers/PositionJob/postPositionJob");

const postPositionJobHandler = async (req, res) => {
  try {
    console.log("postPositionJobHandler");
    const newPositionJob = await postPositionJob(req.body);
    if (newPositionJob.created) {
      res.status(200).json(newPositionJob);
    } else {
      res.status(400).json(newPositionJob);
    }
  } catch (error) {
    console.log(`postPositionJobHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postPositionJobHandler;
