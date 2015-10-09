// アルファベットを計上してオブジェクトで返却する関数を実装して下さい
// abcという文字列を渡した時に、{a: 1, b: 1, c: 1}という値を返すようにします。
// 記号は計上せず、大文字がある場合は小文字として同じアルファベットに計上します。
module.exports = function(string) {
  var charaDataObj = {};

  function countCharactor(str, length, obj) {
    for (var i = 0; i < length; i++) {
      var thisChara = str.charAt(i).toLowerCase();

      if (thisChara.match(/^[a-zA-Z0-9]+$/)) {
        var targetCharaNum = 0;
        if (obj[thisChara] !== undefined) {
          targetCharaNum = parseInt(obj[thisChara])
        }
        obj[thisChara] = targetCharaNum + 1
      }
    }

    return obj;
  }

  function countCharactors(string) {
    var strLength = string.length;
    var resultObj = countCharactor(string, strLength, charaDataObj);

    return resultObj;
  }

  return countCharactors(string);
};
