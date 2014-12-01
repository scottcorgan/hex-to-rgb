var hexToRgb = require('./index');
var test = require('tape');

test('converts', function (t) {
  
  t.deepEqual(hexToRgb('000000'), [0,0,0], 'black converted');
  t.deepEqual(hexToRgb('#ffffff'), [255,255,255], 'white converted with hash');
  t.end();
});