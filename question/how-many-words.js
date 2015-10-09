// 文字カウントとワードカウントを数える関数を実装する。
// "I have a nice question"が渡された場合は
// { charactors: 18, words: 5 }
// を返す。ただし、カンマ、セミコロンなどの特殊文字はカウントに含まないものとする。
module.exports = function (str) {

  function checkChara(str) {
    if(str.match(/^[a-zA-Z0-9]+$/)) {
      return true;
    } else {
      return false;
    }
  }

  function checkSpace(str) {
    if(str.match(/[^\s]/)) {
      return true;
    } else {
      return false;
    }
  }

  function countCharactors(str, length) {
    var count = 0;
    for( var i = 0; i < length; i++ ) {
      if( checkChara(str.charAt(i)) ) {
        count++;
      }
    }
    return count;
  }

  function countWord(str, length) {
    var count = 0;
    for( var i = 0; i < length; i++ ) {
      if( !checkSpace(str.charAt(i)) ) {
        count++;
      }
    }
    count++;
    return count;
  }

  function howManyWords(str) {
    var strLength = str.length;

    var charCount = countCharactors(str, strLength);
    var wordCount = countWord(str, strLength);

    var resultObj = {
      'charactors': charCount,
      'words': wordCount
    }
    return resultObj;
  }

  return howManyWords(str);
};
