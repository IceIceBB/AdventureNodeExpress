var mongoose = require('mongoose');

var chapterSchema = mongoose.Schema({
    title: String,
    summary: String,
    type: String,
    storyID: String // ForeignKey
});

var Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;