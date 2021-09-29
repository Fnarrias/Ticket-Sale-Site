const { RecintoModel } = require("../models/Recinto");

const recintoPorId = async (req, res) => {
  try {
    const { _id } = req.params;
    const recinto = await RecintoModel.findById(_id);

    res.json(recinto);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = recintoPorId;
