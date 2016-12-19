/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  let angles = [];
  let angleType = undefined;
  function getAngle(x, y, z) {
    let angle = (x * x + y * y - z * z) / (2 * x * y);
    if (Math.abs(angle) >= 1) {
      return -1;
    } else {
      return angle;
    }
  }
  angles = [
    getAngle(b, c, a),
    getAngle(a, c, b),
    getAngle(a, b, c),
  ];
  angles.forEach(function(x) {
    if (x == -1) {
      angleType = 0;
      return;
    } else if (x < 0) {
      angleType = 3;
      return;
    } else if (x == 0) {
      angleType = 2;
      return;
    } else if (x > 0) {
      angleType = angleType || 1;
    }
  });
  return angleType;
}
