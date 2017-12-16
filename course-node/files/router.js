const fs = require('fs');

var router = {
  index: function(request, response) {
    fs.readFile('./template/index.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    })
  },
  login: function(request, response) {
    fs.readFile('./template/login.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    })
  },
  registor: function(request, response) {
    fs.readFile('./template/registor.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    })
  }
}

module.exports = router;
