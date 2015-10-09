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
module.exports = function (array) {
  var keyArray = [];

  function getKeyValue(data) {
    if(Array.isArray(data)) {
      for(key in data) {
        keyArray.push(key);
      }

      keyArray.filter(function(key, index, _array) {
        return _array.indexOf(key) !== _array.lastIndexOf(key);
      });
    }
  }

  function distinct(array) {
    array.slice().map(function(data) {
      getKeyValue(data);
    });
  }
};
