const Idea = require('../models/idea');

exports.obtenerServicios = async () => {
    const servicios = await Idea.find();
    return servicios;
}