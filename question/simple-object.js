//次のようなオブジェクト
//{
//  key1: {N: "12"},
//  key2: {S: "String"}
//}
//を以下のように変換して返す関数を作成する。
//{
//  key1: 12,
//  key2: "String"
//}
module.exports = function(object) {
  var resultObject = {};
  var resultObjKey;

  function isObject(obj) {
    return (Object(obj) === obj && !Array.isArray(obj));
  }

  function getValue(obj) {
    for (var type in obj) {
      if (obj.hasOwnProperty(type)) {
        var targetData = obj[type];

        if (isObject(targetData)) {
          for (var tmpKey in targetData) {
            var tmpObject = {};
            var tmpValue;

            tmpValue = getValue(targetData);
            tmpObject[type] = tmpValue;
            resultObject[resultObjKey] = tmpObject;
          }
        }

        if (Array.isArray(targetData)) {
          var tmpDataArray = [];
          targetData.forEach(function(data) {

            if (isObject(data)) {
              var tmpDataObject = {};

              for (var dataKey in data) {
                if (data.hasOwnProperty(dataKey)) {
                  tmpDataObject[dataKey] = getValue(data[dataKey]);
                }
              }
              tmpDataArray.push(tmpDataObject);
            } else {
              resultObject[resultObjKey][type] = getValue(data);
            }
          })
          resultObject[resultObjKey][type] = tmpDataArray;
        }

        if (type == 'N') {
          return parseInt(targetData);
        } else if (type == 'S') {
          return targetData + '';
        }
      }
    }
  }

  function simpleObject(object) {
    for (var key in object) {
      resultObjKey = key;
      if (object.hasOwnProperty(key)) {
        var datum = object[key];

        if (Object.keys(datum).length > 1) {
          if (isObject(datum)) {
            getValue(datum);
          }
        } else {
          var value = getValue(datum);
          resultObject[resultObjKey] = value;
        }
      }
    }
  return resultObject;
}

return simpleObject(object);
};
