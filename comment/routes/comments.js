const express = require('express');
var router = express.Router();
const mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var CONN_DB_STR = 'mongodb://localhost:27017/user';

router.all('/talk', function(req, res) {
  var title = req.body['title'];
  var val = req.body['val'];
  var username = req.session.username;
  var data = [{username: username, title: title, val: val }];

  function insertData(db) {
    var conn = db.collection('comment');
    conn.insert(data, function(err, results) {
      if(err) {
        console.log(err);
        return;
      } else {
        res.redirect('/list')
      }
      db.close();
    })
  }
  // 验证是否登录
  if(!username) {
    res.send('<script>alert("登录超时，请重新登录"); location.href="/login"</script>')
  } else {
    MongoClient.connect(CONN_DB_STR, function(err, db) {
      if(err) {
        console.log(err);
        return;
      } else {
        console.log('connect Success~');
        insertData(db);
      }
    })

  }

})

module.exports = router;
