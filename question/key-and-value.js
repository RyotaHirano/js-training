// オブジェクトのkeyおよびvalueに含まれる数値を合計する関数を実装する。
// 例えば{ k1y: 'val3e' }なら{ key: 1, value: 3 }。
// 連続している場合は1つの数値とし、文字列はNumberにキャストするものとする。
module.exports = function(object) {
  var returnObj = {
    'key': 0,
    'value': 0
  };

  function isNumber(x) {
    if (typeof(x) != 'number' && typeof(x) != 'string')
      return false;
    else
      return (x == parseFloat(x) && isFinite(x));
  }

  function isObject(value) {
    return (Object(value) === value && !Array.isArray(value));
  }

  function getNum(value) {
    var length = value.length;
    var lastIsNum = false;
    var numString = '';
    var totalNum = 0;

    if(isNumber(value)) {
      return value;
    } else {
      var strValue = value + '';

      for (var i = 0; i < length; i++) {
        var target = strValue.charAt(i);

        if (isNumber(target)) {
          numString = numString + target + '';
          lastIsNum = true;
        } else {
          if (lastIsNum === true) {
            totalNum = totalNum + parseInt(numString);
            numString = '';
          }
          lastIsNum = false;
        }
      }

      if (lastIsNum === true) {
        totalNum = totalNum + parseInt(numString);
      }

      return totalNum;
    }
  }

  function keyAndValue(obj) {
    if (isObject(obj)) {
      for (var myKey in obj) {
        var targetObj = obj[myKey];
        if (isObject(targetObj)) {
          returnObj = {
            'key': returnObj['key'] + getNum(myKey),
            'value': returnObj['value'] + getNum(targetObj)
          };
          keyAndValue(targetObj);
        } else {
          returnObj = {
            'key': returnObj['key'] + getNum(myKey),
            'value': returnObj['value'] + getNum(targetObj)
          };
        }
      }
    }
    return returnObj;
  }

  return keyAndValue(object);
};
