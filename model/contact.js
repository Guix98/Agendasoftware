const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contacto = Schema({
    nombre: String,
    email: String,
    telefono: String,

});

module.exports = mongoose.model('contactos', Contacto);