// いくつかのオブジェクトを要素として含んでいる配列を引数にとり
// 複数の要素のうちキーが重複している場合、
// その値である文字列をdistinctして取得する関数を実装する。
// また、キーに対する値はソートして返却する。
//
// たとえば
// [{
//   hoge: 'eeb'
// }, {
//   hoge: 'aabb',
//   huga: 'cberui'
// }]
// という引数の場合、hogeのみが重複しているので
// {
//   hoge: 'abe'
// }
// を返却する。
module.exports = function(array) {
  var arrayCount = 0;
  var keyArray = [];
  var distinctTargetKeyArray = [];
  var keyValueCount = {};
  var valueArray = [];
  var resultObject = {};

  function isObject(value) {
    return (Object(value) === value && !Array.isArray(value));
  }

  function getKeyValue(data) {
    if (isObject(data)) {
      for (var key in data) {
        keyArray.push(key);
        if (isNaN(parseInt(keyValueCount[key]))) {
          keyValueCount[key] = 0;
        }
        keyValueCount[key] = keyValueCount[key] + 1;
      }
    }

    for (var key in keyValueCount) {
      if (keyValueCount.hasOwnProperty(key)) {
        if (keyValueCount[key] === arrayCount) {
          distinctTargetKeyArray.push(key);
        }
      }
    }
  }

  function distinctString(string) {
    var strLength = string.length;
    var strIndex = 0;
    var tmpArray = [];
    var returnString = '';

    for (var strIndex = 0; strIndex < strLength; strIndex++) {
      returnString = '';
      var targetString = string.slice(strIndex, strIndex + 1);
      if (tmpArray.indexOf(targetString) < 0) {
        tmpArray.push(targetString);
      }
      tmpArray.sort().map(function(tmpString) {
        returnString = returnString + tmpString;
      });
    }

    return returnString;
  }

  function getObjectValue(keyArray, array) {
    keyArray.map(function(key) {
      valueArray = [];
      array.map(function(data) {
        valueArray.push(data[key]);
      });

      var allString = '';
      valueArray.map(function(string) {
        allString = allString + string;
      });

      allString = distinctString(allString);
      resultObject[key] = allString;
    });
  }

  function distinct(array) {
    arrayCount = array.length;
    array.slice().map(function(data) {
      getKeyValue(data);
    });

    getObjectValue(distinctTargetKeyArray, array);
  }

  distinct(array);
  return resultObject;
};
