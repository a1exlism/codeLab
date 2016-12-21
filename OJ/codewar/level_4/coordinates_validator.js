//	input x, y output true || false
//	Longitude (+-)0-180 Latitude (+-)0-90
function isValidCoordinates(coordinates) {
  let cooArr = coordinates.split(',');
  //  todo: - space
  let len = cooArr.length;
  if (len != 2) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (/[^\s]-|-\s/.test(cooArr[i]) || /[^\d.-\s]/g.test(cooArr[i])) {
      return false;
    }
    let dotNum = cooArr[i].match(/\./g) == null
      ? 0
      : cooArr[i].match(/\./g).length;
    if (dotNum > 1) {
      return false;
    }
    if (i == 0) {
      if (cooArr[i].replace(/(?:-?)(\d+)/, '$1') > 90) {
        return false;
      }
    } else if (i == 1) {
      if (cooArr[i].replace(/(?:-?)(\d+)/, '$1') > 180) {
        return false;
      }
    }
  }
  return true;
}

//  Better One with fatastic regexp
function isValidCoordinates(coordinates) {
  let match = coordinates.match(/^[-]?(\d+(?:\.\d+)?),\s?[-]?(\d+(?:\.\d+)?)$/);
  if (!match) {
    return false;
  }
  let lat = Math.abs(parseFloat(match[1]));
  let lng = Math.abs(parseFloat(match[2]));
  return lat <= 90 && lng <= 180;
}

//  正则匹配范围!!
function isValidCoordinates(coordinates) {
  return /^-?((\d)|([0-8]\d)|(90))(\.\d+)?, ?-?((\d\d?)|(1[0-7]\d)|(180))(\.\d+)?$/
    .test(coordinates);
}
