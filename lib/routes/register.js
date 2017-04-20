var express = require('express'),
    router = express.Router(),

    router.get('/register', function(req, res){
        res.render('users/register');
    });