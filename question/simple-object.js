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
  var myObject = {};

  function isArray(target) {
    return Object.prototype.toString.call(target) === '[object Array]';
  }

  function isObject(target) {
    if ( target !== undefined && target !== null ) {
    	if ( Object.keys(target).length > 0 && !isArray(target) ) {
    		return true;
    	}
    }
    return false;
  }

  function simpleObject(obj) {
    var _obj = {};

    for (var key in obj) {
      var data = obj[key];

      if ( isObject(data) ) {
        simpleObject(data);
      } else {
        if (obj.hasOwnProperty(key)) {
          _obj[key] = obj[key];
        }
      }
    }

    return _obj;
  }

  // simpleObject(object);

  // for (var key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     myObject[key] = object[key];
  //   }
  // }
  // for (var myKey in myObject) {
  //   var objectDatum = {};
  //   if (myObject.hasOwnProperty(myKey)) {
  //     objectDatum[myKey] = myObject[myKey];
  //
  //     for (var myKey2 in objectDatum) {
  //       var objectData = {};
  //       if (objectDatum.hasOwnProperty(myKey2)) {
  //         objectData = objectDatum[myKey2];
  //
  //         for (var myKey3 in objectData) {
  //           var convData;
  //
  //           for (var myKey4 in objectData) {
  //
  //           }
  //
  //           if (isNaN(objectData[myKey3])) {
  //             //文字列
  //             convData = objectData[myKey3] + '';
  //           } else {
  //             //数値
  //             convData = parseInt(convData[myKey3]);
  //           }
  //           myObject[myKey] = convData;
  //         }
  //
  //       }
  //     }
  //
  //   }
  // }
  //
  //
  // return myObject;
};
