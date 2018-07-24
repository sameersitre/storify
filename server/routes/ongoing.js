const express = require('express');
var router = express.Router();
const Story = require('../models/stories');
const Prompt = require('../models/prompts');

router.get('/ongoing', (req, res)=>{
    Story.find({edit: true}).then(data=>{
        // console.log(data);
        res.render('ongoing',{data: data});
    }).catch(err=>{throw err});
});

router.get(`/ongoing/:storyID`, (req,res)=>{
    Story.find({_id: req.params.storyID}).then(data=>{
        // console.log(data);
        Prompt.find({cid: data[0].cid}).then(dataWithPrompt=>{
            // console.log(dataWithPrompt);
            res.render('ongoingEdit', {data: data[0], prompt: dataWithPrompt[0]});
        }).catch(err=>{throw err});
    }).catch(err=>{throw err});
});

router.post('/ongoing/:storyID', (req,res)=>{
    Story.find({_id: req.params.storyID}).then(data=>{
        data[0].description += req.body.text;
        data[0].save().then(()=>{res.redirect('/');}).catch(err=>{throw err});       
    }).catch(err=>{throw err});
});

module.exports = router;