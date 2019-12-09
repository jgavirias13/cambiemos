const controller = require('../controllers/ideaController');

module.exports = (router) => {
    router.route('/ideas')
        .get(controller.obtenerIdeas)
        .post(controller.agregarIdea);
    router.route('/ideas/:id')
        .get(controller.obtenerIdea)
        .put(controller.modificarIdea)
        .delete(controller.eliminarIdea);
}