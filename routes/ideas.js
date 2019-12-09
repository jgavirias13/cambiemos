const controller = require('../controllers/ideaController');

module.exports = (router) => {
    router.route('/ideas')
        .get(controller.obtenerIdeas);
}