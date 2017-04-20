var express = require('express'),
    router = express.Router(),
    User = require('../../models').User;

    router.get('/register', function(req, res){
        res.render('users/register');
    });