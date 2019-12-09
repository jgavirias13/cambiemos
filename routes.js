const ideasRouter = require('./routes/ideas');

module.exports = (router) => {
    ideasRouter(router);
    return router;
}