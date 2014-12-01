module.exports = function hexToRgb (hex) {
  
  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex);
  }
  
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b];
};

function removeHash (hex) {
  
  var arr = hex.split('');
  arr.shift();
  return arr.join('');
}