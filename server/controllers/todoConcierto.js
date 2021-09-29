const { ConciertoModel } = require("../models/Concierto");

const todoConcierto = async (req, res) => {
  try {
    const conciertos = await ConciertoModel.find();

    res.json(conciertos);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = todoConcierto;
