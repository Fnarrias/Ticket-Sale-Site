const { UserModel } = require("../models/User");
const { ConciertoModel } = require("../models/Concierto");

const conciertosByUser = async (req, res) => {
    try{
        const { _id } = req.params;
        const doc = await UserModel.findById(_id);

        if (!doc) return res.status(404).json({ message: "Usuario no encontrado" })

        //console.log(doc)

        const conciertos = await ConciertoModel.find();

        let conciertosUsuario = [];

        const conciertosFiltrados = doc.conciertoscomprados.map((item)=>{
            conciertos.forEach((element) => {
                if (element._id == item.conciertoID) conciertosUsuario.push(element)
                //console.log(`${element._id} y ${item.conciertoID}`)
            });
        })

        // const conciertosDeUsuario = conciertos.filter(
        //     (element) => element.nombre === doc.conciertoscomprados[1].nombre
        //   );
        //console.log()
        res.json(conciertosUsuario);
    }catch(e){
        console.error(e);
        res.status(500).json({ message: e.message });
    }

}

module.exports = conciertosByUser;
