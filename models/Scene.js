var mongoose = require('mongoose');

var sceneSchema = mongoose.Schema({
    title: String,
    journalText: String,
    flagModifiers: String,
    body: String,
    chapterID: String // ForeignKey
});

var Scene = mongoose.model('Scene', sceneSchema);

module.exports = Scene;