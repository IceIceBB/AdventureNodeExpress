var express = require('express');
var router = express.Router();

var Story = require('../models/Story');
var Chapter = require('../models/Chapter');
var Scene = require('../models/Scene');
var Transition = require('../models/Transition');

/* GET home page. */
router.post('/story', function (req, res) {
    Story.create(req.body, function(err, story) {
        res.json({story : story});
    });
});

router.get('/story', function (req, res) {
    Story.find({}, function (err, stories) {
        res.json({ stories: stories });
    });
});

router.post('/chapter', function (req, res) {
    Chapter.create(req.body, function (err, chapter) {
        res.json({ chapter: chapter });
    });
});

router.get('/chapter/:storyID', function (req, res) {
    Chapter.find({ "storyID" : req.params.storyID }, function (err, chapters) {
        if (err) {
            res.send("Failed");
        } else {
            res.json({ chapters: chapters });
        }
    });
});

router.post('/scene', function(req, res) {
    Scene.create(req.body, function(err, scene) {
        res.json({scene : scene});
    });
});

router.get('/scene/:chapterID', function (req, res) {
    Scene.find({ "chapterID": req.params.chapterID }, function (err, scenes) {
        if (err) {
            res.send("Failed");
        } else {
            res.json({ scenes: scenes });
        }
    });
});

router.post('/transition', function(req, res) {
    Transition.create(req.body, function(err, transition) {
        res.json({transition : transition});
    });
});

router.get('/transition/:sceneID', function (req, res) {
    Transition.find({ "fromSceneID": req.params.sceneID }, function (err, transitions) {
        if (err) {
            res.send("Failed");
        } else {
            res.json({ transitions: transitions });
        }
    });
});

module.exports = router;