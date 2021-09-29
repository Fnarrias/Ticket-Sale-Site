const { ConciertoModel } = require("../models/Concierto");

const conciertoPorId = async (req, res) => {
  try {
    const { _id } = req.params;
    const concierto = await ConciertoModel.findByIdAndDelete(_id);

    res.json(concierto);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = conciertoPorId;
