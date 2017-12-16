var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/login', function(req, res) {
//   // console.log(req.param('username'));
//   console.log(req.query['pwd']);
//   res.send('login success');
// });

router.all('/login', function(req, res) {
  console.log(req.body['username']);

  res.send('login success');
});

module.exports = router;
