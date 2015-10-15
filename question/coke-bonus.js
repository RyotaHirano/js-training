// コーラを買います
// コーラの空き瓶を4本集めると、おまけで新しいコーラもう1本くれます
// 例えば4本買った時に最終的に手に入るコーラは5本です
// 例えば16本買った時に最終的に手に入るコーラは21本です
// n本買った時に最終的に手に入るコーラの数を計算してください
module.exports = function(number) {
  var exchangeBottleCount = 4;
  var resultCount = 0;

  function getBottle(num) {
    var getCount = Math.floor(num / exchangeBottleCount);

    if (getCount > 0) {
      resultCount = resultCount + getCount;
      getBottle(getCount);
    } else {
      return getCount;
    }
  }

  function cokeBonus(number) {
    var getBottleNum = number;
    resultCount = getBottleNum;

    getBottle(resultCount);
    return resultCount;
  }

  return cokeBonus(number);
};
