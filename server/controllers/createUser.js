
const { TriviaModel } = require("../models/Trivias");

const newTrivia = async (req, res) => {
  try {
    const {nombre, tema, trivia } = req.body;

    const doc = await TriviaModel.create({
        nombre: nombre,
        tema: tema,
        trivia: trivia
    });

    res.status(201).json(doc);
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = newTrivia;