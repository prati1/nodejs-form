var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer({dest: './uploads/'})

const Profile = require('../models/profiles');

router.get('/delete/:id',upload.single('pdffile'), function(req, res){
	Profile.findOneAndRemove({_id: req.params.id}, function(err, doc){
		if (err) throw err;
		res.redirect('/');
	})
})

module.exports = router;
