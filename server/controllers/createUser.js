
const { UserModel } = require("../models/User");
const bcrypt = require('bcrypt');

const newUser = async (req, res) => {
  try {
    const {nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    // console.log(salt);
    //console.log(hashedPassword);

    const doc = await UserModel.create({
        nombre: nombre,
        email: email,
        password: hashedPassword,
        conciertosComprados: []
    });


    res.status(201).json(doc);
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = newUser;