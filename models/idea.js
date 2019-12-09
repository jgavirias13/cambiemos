const mongoose = require('mongoose');

var ideaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    }
});

mongoose.model('Idea', ideaSchema);
module.exports = mongoose.model('Idea');