const express = require('express');
const { projects } = require('./data.json');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');


app.use('/', (req,res, next) => {
    res.locals = data.projects;
    res.render('home');
});

app.use('/about', (req,res,next) => {
    res.render('about');
});

app.listen(3000, () =>{
    console.log('site is working');
} )