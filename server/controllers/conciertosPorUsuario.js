const { UserModel } = require("../models/User");
const { ConciertoModel } = require("../models/Concierto");

const conciertosByUser = async (req, res) => {
    try{
        const { _id } = req.params;
        const doc = await UserModel.findById(_id);

        if (!doc) return res.status(404).json({ message: "Usuario no encontrado" })

        

        res.json(doc);
    }catch(e){
        console.error(e);
        res.status(500).json({ message: e.message });
    }

}
