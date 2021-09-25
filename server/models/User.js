const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    Nombre:{
        type: String,
        required:[true]
    },
    email:{
        type: String,
        required: [true],
        unique: [true],
        minlength: [5, "El correo del usuario debe ser de almenos 5 caracteres de largo"]
        
    },
    conciertosComprados:{
        type: Array,
    }
})


const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserSchema, UserModel };
