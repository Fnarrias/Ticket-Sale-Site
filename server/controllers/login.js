const { UserModel } = require("../models/User");
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
try {
    const { email, password } = req.body;
    
    const doc = await UserModel.findOne({ email: email });

    //console.log(email);

    if (!doc){
        return res.status(404).json({ message: "Usuario o password erróneos" })
    }else {
        // console.log(doc.password);
        // console.log(password);
        if(!await bcrypt.compare(password, doc.password)){
            return res.status(401).json({ message: "Usuario o password erróneos" })
        }else{
            return res.status(200).json({ message: "Success" })
        }
    }

    // res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = loginUser;