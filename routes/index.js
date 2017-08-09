var express = require('express');
var router = express.Router();

/* GET home page. */

const Profile = require('../models/profiles');

var person = {name: 'Pratiksha Shrestha', 
			  college:'Kathmandu University', 
			  course: 'B.E Computer Engineering', 
			  semester: '6', 
			  contact:'9867637598', 
			  email:'meprati1@gmail.com',
			  fb:'www.facebook.com/pratibha.stha',
			  profile: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/13083227_996133187142238_1740844350708205120_n.jpg?oh=a085f82dbc247b1865c475586b026151&oe=59A21A12'};



router.get('/', function(req, res) {
 	Profile.getProfiles(function(err, profiles){
 		console.log('data..........',profiles[3]);
 		if (err) throw err;
 		res.render('index', {title: 'WLiT Bootcamp 2017', profiles});
 	})
});

/*router.get('/', function(req, res, next) {
 res.render('index', { title: 'Node Prac', person });
});*/

/*router.get('/profile', function(req,res){
	res.render('profile',{person});
});
*/

router.get('/profile', function(req, res) {
 	Profile.getProfiles(function(err, profiles){
 		console.log('data..........',profiles[0]);
 		if (err) throw err;
 		res.render('profile', {title: 'WLiT Bootcamp 2017', profiles});
 	})
});

router.get('/add', function(req,res){
	res.render('add');
});

router.get('/hello', function(req,res){
	res.render('hello');
});

router.get('/indext', function(req,res){
	res.render('indext');
});

router.get('/case', function(req,res){
	res.render('case');
});


router.get('/tab2', function(req,res){
	res.render('tab2');
});
/*router.get('/template', function(req,res){
	res.render('template');
});

router.get('/test', function(req,res){
	res.render('test');
});*/

router.get('/update/:id', function(req,res){
	Profile.findOne({_id: req.params.id}, function(err, profile){
		res.render('update', {profile});
		if (err) throw err;
	})
});


module.exports = router;


