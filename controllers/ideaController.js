const IdeaService = require('../services/ideaService');

exports.obtenerIdeas = async (req, res) => {
    let status = 200;
    const servicios = await IdeaService.obtenerServicios();
    res.status(status).send(servicios);
};