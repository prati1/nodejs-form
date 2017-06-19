var express = require('express');
var router = express.Router();

/* GET home page. */

var person = {name: 'Pratibha', 
			  college:'Kathmandu University', 
			  course: 'B.E Computer Engineering', 
			  semester: '6', 
			  contact:9867637598, 
			  email:'meprati1@gmail.com',
			  fb:'www.facebook.com/pratibha.stha',
			  profile: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/13083227_996133187142238_1740844350708205120_n.jpg?oh=a085f82dbc247b1865c475586b026151&oe=59A21A12'};

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Node Prac', person });
});

router.get('/profile', function(req,res){
	res.render('profile',{person});
});

router.get('/add', function(req,res){
	res.render('add');
});

module.exports = router;


