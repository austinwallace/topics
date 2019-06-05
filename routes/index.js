const express = require('express'),
    router = express.Router(),
    RankingsModel = require('../models/rankings');

router.get('/', async (req, res, next) => {
    const topics = await RankingsModel.getAllTopics();
    console.log("hello world")
    res.render('template', {
        locals: {
            title: 'Class Rankings',
            topics: topics
            
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

router.post('/update', (req, res) => {
    console.log(req.body);


    res.status(200).redirect('/');
});

module.exports = router;