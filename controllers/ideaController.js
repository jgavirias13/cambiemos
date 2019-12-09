const IdeaService = require('../services/ideaService');

exports.obtenerIdeas = async (req, res) => {
    let status = 200;
    let response = {};
    try{
        const ideas = await IdeaService.obtenerIdeas();
        response = ideas;
    }catch(err){
        status = 500;
        response = err;
    }
    res.status(status).send(response);
};

exports.agregarIdea = async (req, res) => {
    let status = 200;
    let response = {};

    try{
        const idea = await IdeaService.agregarIdea(req.body);
        response = idea;
    }catch(err){
        status = 500;
        response = err;
    }
    res.status(status).send(response);
}

exports.modificarIdea = async (req, res) => {
    let status = 200;
    let result = {};
    let id = req.params.id;

    try{
        const idea = await IdeaService.modificarIdea(id, req.body);
        result = idea;
    }catch(err){
        status = 500;
        if(err.code){
            status = err.code;
        }
        result = err;
    }
    res.status(status).send(result);
};

exports.obtenerIdea = async (req, res) => {
    let status = 200;
    let result = {};
    let id = req.params.id;

    try{
        const idea = await IdeaService.obtenerIdea(id);
        result = idea;
    }catch(err){
        status = 500;
        if(err.code){
            status = err.code;
        }
        result = err;
    }
    res.status(status).send(result);
};

exports.eliminarIdea = async (req, res) => {
    let status = 200;
    let result = {};
    let id = req.params.id;

    try{
        const idea = await IdeaService.eliminarIdea(id);
        result = idea;
    }catch(err){
        status = 500;
        if(err.code){
            status = err.code;
        }
        result = err;
    }

    res.status(status).send(result);
};