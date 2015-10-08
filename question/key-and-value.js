// オブジェクトのkeyおよびvalueに含まれる数値を合計する関数を実装する。
// 例えば{ k1y: 'val3e' }なら{ key: 1, value: 3 }。
// 連続している場合は1つの数値とし、文字列はNumberにキャストするものとする。
module.exports = function(object) {
  var returnObj = {
    'key': 0,
    'value': 0
  };

  function getNum(value) {
    var length = value.length;
    var lastIsNum = false;
    var numString = '';
    var totalNum = 0;

    value = value + '';

    for (var i = 0; i < length; i++) {
      var target = value.charAt(i);

      if (!isNaN(parseInt(target))) {
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

    if (lastIsNum == true) {
      totalNum = totalNum + parseInt(numString);
    }

    return totalNum;
  }

  function isObject(value) {
    return (value !== null &&
            typeof value !== 'undefined' &&
            Object(value) === value &&
            !Array.isArray(value));
  }

  function keyAndValue(obj) {
    if (isObject(obj)) {
      for(var myKey in obj) {
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
