const express = require('express');
const app = express();
const session= require('express-session');
const bodyParser = require('body-parser');
var mongoose = require("mongoose");
const pug = require('pug');
mongoose.Promise = global.Promise;



app.set('view engine', 'pug');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({secret:"a", resave: false, saveUninitialized: true}));


const User = require('./models/users');
const Story = require('./models/stories');
const Prompt = require('./models/prompt');


//home
app.get('/', (req, res)=>{
    Story.find({}).then(item=>{        
        var deletedItems;
        if (req.session.user){
            res.render('home',{item, session: req.session.user.name} )
        }
        else{
            res.render('home',{item});
        }
    }).catch(err=>{
        throw err
    })
});


//signup
app.get('/signup', (req, res)=>{
    res.render('signup');
});

app.post('/signup/:add', (req,res)=>{
    // console.log("Parameter received","at /signup/:add -", req.params.add);
    if (req.params.add=="register"){
        User.findOne({name: req.body.name, email: req.body.email},(err, data)=>{
            if (err) throw err;
            // else if (data == null){
            //     res.sendStatus(404);
            //     return;
            // }
            else{
                var newUser= new User({name: req.body.name,email: req.body.email, password: req.body.password, items: []});
                req.session.user=newUser;
                newUser.save().then(()=>{res.render('home', {session: req.session.user.name})}).catch(e=>res.redirect('signup'));
            }
        })
    }
    else if (req.params.add==="login"){
        User.findOne({name: req.body.name, password: req.body.password}, (err, data)=>{
            if (err) throw err;
            else if (data == null){
                res.sendStatus(404);
                return;
            }
            else{
                req.session.user=data;
                res.redirect('/');
                // console.log("Current Session", "at /signup/:add",req.session.user);
                // console.log("----------------------------------------------------------------------------------------")
            }
        })
    }
    else{
        res.json("page not found");
    }
});

app.post('/signout', (req,res)=>{
    // console.log(req.session.user.name);
    if (req.session){
        req.session.destroy();
        console.log("Destroyed the current session of","at /signout -");
        console.log("----------------------------------------------------------------------------------------")
        res.redirect('/');
    }else{
        res.json("sign in first to sign out");
    }
});
//End of Signup


//adding new story
app.get('/prompt', (req, res)=>{
    console.log("reached prompt");
    // if (req.session.user){
        Prompt.findOne({character1: "hero"}).then((data)=>{
            console.log("entered the db");
                console.log("At /prompt", data);
                // res.send(data);
                res.render('newStory');
        }).catch(err=>{throw err});
    // }
    // else{
    //     res.redirect('/')
    // }
});

app.post('/story/new', (req,res)=>{
    if (req.session.user){
        //post on submit and store to db but now we need to use sockets. Figure that out
        //SOCKETS TRIP
    }
    else{
        res.redirect('/signup');
    }
});


//User's profile
app.get('/profile', (req,res)=>{
    if (req.session.user){
        User.findOne({email: req.session.user.email, password: req.session.user.password }).then(user =>{
            var items =user.items;
            res.render('profile', {items, name: user.name})
        })
    }
    else{
        res.redirect('/signup');
    }
});










mongoose.connect(("mongodb://localhost:27017/storify"), (err, db) => {
    console.log("Connection Status :",mongoose.connection.readyState);
    if (err) {
        console.log('err');
    }
    else { console.log('Connected',db.name)
        app.listen(3000, () => {
        console.log("Server is listening on port 3000");
        console.log("----------------------------------------------------------------------------------------")
        });
    }
});