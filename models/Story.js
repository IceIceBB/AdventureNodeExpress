var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    title: String,
    creator: String,
    description: String,
    genre: String,
    type: String,
    tags: String
});

var Story = mongoose.model('Story', storySchema);

module.exports = Story;