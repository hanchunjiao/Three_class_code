var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var CONN_DB_STR = 'mongodb://localhost:27017/user';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello world', username: req.session.username });
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.get('/registor', function(req, res, next) {
  res.render('registor', {});
});

router.get('/logout', function(req, res, next) {
  req.session.username = undefined;
  res.redirect('/');
});

router.get('/comments' ,function(req, res) {
  res.render('comment', {});
});

router.get('/list', function(req, res) {

  function findData(db) {
    var conn = db.collection('comment');
    conn.find().toArray(function(err, results) {
      console.log(results);
      res.render('list', {resData: results})
    })
  }

  MongoClient.connect(CONN_DB_STR, function(err, db) {
    findData(db)
  })


})

module.exports = router;
