const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:[true]
    },
    email:{
        type: String,
        required: [true],
        unique: [true],
        minlength: [5, "El correo del usuario debe ser de almenos 5 caracteres de largo"]
        
    },
    password:{
        type: String,
        required: true,
        minlength: [5, "El password del usuario debe ser de almenos 5 caracteres de largo"]
    },
    conciertosComprados:{
        type: Array,
        //{id concierto, asiento}
    }
})


const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserSchema, UserModel };
