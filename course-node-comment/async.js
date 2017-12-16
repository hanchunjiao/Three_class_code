const async = require('async');

// 串行无关联
// console.time('test');
// async.series([
//   function(callback) {
//     callback(null, 'one')
//   },
//   function(callback) {
//     callback(null, 'two')
//   },
//   function(callback) {
//     callback(null, 'three')
//   }
// ], function(err, results) {
//   console.timeEnd('test');
//   console.log(results);
// });


// 并行无关联
// console.time('text')
// async.parallel([
//   function(callback) {
//     callback(null, '1')
//
//   },
//   function(callback) {
//     callback(null, '2')
//
//   }
// ], function(err, results) {
//   console.timeEnd('text');
//   console.log(results);
// })
//

// 串行有关联
async.waterfall([
  function(callback) {

    callback(null, 'one', 'two')
  },
  function(arg1, arg2, callback) {
    console.log(arg1, arg2);
    callback(null, 'three', arg1, arg2)
  },
  function(are1, are2, are3, callback) {
    callback(null, [are1, are2, are3])
  }
], function(err, results) {
  console.log(results);
})
