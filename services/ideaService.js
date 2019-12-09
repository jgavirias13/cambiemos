const Idea = require('../models/idea');
const Errors = require('./errors');

exports.obtenerIdeas = async () => {
    const ideas = await Idea.find();
    return ideas;
}

exports.agregarIdea = async (reqServicio) => {
    const idea = await Idea.create(reqServicio);
    return idea;
}

exports.modificarIdea = async (idIdea, data) => {
    const idea = await Idea.findByIdAndUpdate(idIdea, data, {new: true});
    if(!idea){
        throw Errors.notFound;
    }
    return idea;
};

exports.obtenerIdea = async (idIdea) => {
    const idea = await Idea.findById(idIdea);
    if(!idea){
        throw Errors.notFound;
    }
    return idea;
}

exports.eliminarIdea = async (idIdea) => {
    const idea = await Idea.findByIdAndDelete(idIdea);
    if(!idea){
        throw Errors.notFound;
    }
    return idea;
}