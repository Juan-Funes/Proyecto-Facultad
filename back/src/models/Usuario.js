const {Schema , model} = require('mongoose');


const UsuarioSchema = new Schema ({

nombre : {
    type : String,
    required: true,
    trim: true, 
    //unique: true
},
edad : {
    type : Number,
    required: true,
    
    //unique: true
},
correo : {
    type : String,
    required: true,
    trim: true, 
    //unique: true
},
password : {
    type : String,
    required: true,
    trim: true, 
    //unique: true
},
 
},
{
timestamps: true

});

module.exports = model('Usuario' , UsuarioSchema);