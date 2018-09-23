(function (root) {

  'use strict';

  var wordify = {};

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = wordify;
    }

    exports = wordify;
  } else {
    root.wordify = wordify;
  }

  /**
  * Format string. First convert to lowercase.
  * Then replace html with a space to prevent words being inadvertantly concatenated.
  * Then remove all non-alphabetic characters.
  * Then replace multiple spaces with one space.
  * Then trim.
  * @param {string} - copy to be processed
  * @returns {string}
  */
  function stripString(copy) {
    copy = copy.toLowerCase().replace(/<(?:.|\n|\r)*?>/gm, ' ');
    copy = copy.replace(/[^\w]/gm, ' ');
    copy = copy.replace(/\s{2,}/gm, ' ');
    copy = copy.trim();
    return copy;
  }

  /**
  * Returns the number of words in a string, stripping out html and punctuation marks.
  * @param copy [string]
  * @returns [number]
  */
  wordify.count = function (copy) {
    if (typeof copy !== 'string' || copy.length === 0) {
      return 0;
    }

    return stripString(copy).split(' ').length;
  };

  /**
  * Returns the length of characters in a string. It strips out html and punctuation marks.
  * @param copy [string]
  * @returns [number]
  */
  wordify.charCount = function (copy) {
    if (typeof copy !== 'string' || copy.length === 0) {
      return 0;
    }

    return stripString(copy).length;
  };

  /**
  * Returns the length of characters in a string including punctuation marks.
  * @param copy [string]
  * @returns [number]
  */
  wordify.charCountPunctuated = function (copy) {
    if (typeof copy !== 'string' || copy.length === 0) {
      return 0;
    }

    copy = copy.toLowerCase().replace(/<(?:.|\n)*?>/gm, ' ');
    copy = copy.replace(/\s{2,}/g, ' ');
    return copy.trim().length;
  };

  /**
  * Returns an array of words. HTML and punctuation marks are removed.
  * @param copy [string]
  * @returns [array]
  */
  wordify.list = function (copy) {
    var wordList = {};
    stripString(copy).split(' ').forEach(function (word, index) {
      wordList[word] = word;
    });

    return Object.keys(wordList);
  };

  /**
  * Returns an dictionary containing word and count attributes. HTML and punctuation marks are removed.
  * @param copy [string]
  * @returns [object]
  */
  wordify.stats = function (copy) {
    var i;
    var wordArray;
    if (typeof copy !== 'string' || copy.length === 0) {
      return wordlist;
    }

    wordArray = stripString(copy).split(' ');
    return wordArray.reduce(function (accumulator, word) {
      if (accumulator[word] && accumulator[word].count) {
        accumulator[word].count += 1
      } else { 
        accumulator[word] = { count: 1 }
      }
      return accumulator
    }, {});
  };

  /**
  * Returns an array of words in numbers specified
  * @param copy [string]
  * @param chunkSize [int]
  * @returns [array]
  */
  wordify.chunk = function (copy, chunkSize) {
    if (typeof copy !== 'string' || copy.length === 0 || typeof chunkSize !== 'number') {
      return [];
    }

    return copy.match(new RegExp('(\\S+)(\\s+\\S+){0,' + (chunkSize - 1) + '}', 'g'));
  };

  /**
  * Returns an array of word chunks in a wave like formation
  * @param copy [string]
  * @param sizes [array] array of numbers specifying wave lengths
  * @returns [array]
  */
  wordify.wave = function (copy, sizes) {
    var i = 0;
    var direction = 1;
    var words = [];
    var getWord = function (copy, index) {
      var result = copy.match(new RegExp('^.{' + index + '}\\w*'));
      if (result) {
        return result[0];
      }

      return copy;
    };

    if (typeof copy !== 'string' || copy.length === 0 || !!!sizes) {
      return [];
    }

    sizes = sizes.filter(function (el) { return typeof el === 'number'; });

    while (copy.length > 0) {
      words.push(getWord(copy, sizes[i]));

      copy = copy.substring(words[words.length - 1].length + 1, copy.length);
      i += direction;
      direction *= (((i % (sizes.length - 1)) === 0) ? -1 : 1);
    }

    return words;
  };

}(this));
