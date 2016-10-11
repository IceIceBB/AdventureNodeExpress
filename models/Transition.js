var mongoose = require('mongoose');

var transitionSchema = mongoose.Schema({
    type: String,
    verb: String,
    flag: String,
    attribute: String,
    comparator: String,
    challengeLevel: Number,
    fromSceneID: String, // Foreign Key
    toSceneID: String // Foreign Key
});

var Transition = mongoose.model('Transition', transitionSchema);

module.exports = Transition;