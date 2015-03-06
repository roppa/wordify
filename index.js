"use strict";

exports = module.exports;

/*
Filter unique elements
@param element [array value] the value of array being processed
@param index [number] ordinal index value
@param baseArray [array] reference to array being processed
@returns [boolean]
*/
function unique(element, index, baseArray) {
    return (baseArray.indexOf(element)) === index ? true : false;
}
/*
Format string. 
First convert to lowercase.
Then replace html with a space to prevent words being inadvertantly concatenated.
Then remove all non-alphabetic characters.
Then replace multiple spaces with one space.
Then trim.
@param copy [string]
@returns [string]
*/
function stripString(copy) {

    copy = copy.toLowerCase();
    copy = copy.replace(/<(?:.|\n)*?>/gm, " ");
    copy = copy.replace(/[^a-z\d\s:]/g, "");
    copy = copy.replace(/\s{2,}/g, " ");
    copy = copy.trim();
    return copy;
}

/*
Returns the number of words in a string, stripping out html and punctuation marks.
@param copy [string]
@returns [number]
*/
module.exports.count = function (copy) {

    var strArr, i;

    if (typeof copy !== "string" || copy.length === 0) {
        return 0;
    }

    //remove all html, then remove all 
    strArr = stripString(copy).split(" ");

    //get rid of any invalid entries
    for (i = 0; i < strArr.length + 1; i = i + 1) {
        if (!!!strArr[i]) {
            strArr.splice(i, 1);
        }
    }

    return strArr.length;
}

/*
Returns the length of characters in a string. It strips out html and punctuation marks.
@param copy [string]
@returns [number]
*/
module.exports.charCount = function (copy) {

    if (typeof copy !== "string" || copy.length === 0) {
        return 0;
    }

    return stripString(copy).length;

}

/*
Returns the length of characters in a string including punctuation marks.
@param copy [string]
@returns [number]
*/
module.exports.charCountWithCharacters = function (copy) {

    if (typeof copy !== "string" || copy.length === 0) {
        return 0;
    }

    copy = copy.toLowerCase();
    copy = copy.replace(/<(?:.|\n)*?>/gm, " ");
    copy = copy.replace(/\s{2,}/g, " ")
    copy = copy.trim();

    return copy.length

}

/*
Returns an array of words. HTML and punctuation marks are removed.
@param copy [string]
@returns [array]
*/
exports.list = function (copy) {

    if (typeof copy !== "string" || copy.length === 0) {
        return [];
    }

    //remove html, then remove anything other than a-z characters, convert to array, get rid of duplicates and sort alphabetically
    return stripString(copy).split(" ").filter(unique).sort();

}

/*
Returns an array of objects containing the word and count. HTML and punctuation marks are removed.
@param copy [string]
@returns [object]
*/
exports.stats = function (copy) {

    var wordlist = {}, i, wordArray;

    if (typeof copy !== "string" || copy.length === 0) {
        return wordlist;
    }

    wordArray = stripString(copy).split(" ");

    for(i = 0; i < wordArray.length; i = i + 1) {
        if (wordlist.hasOwnProperty(wordArray[i])) {
            wordlist[wordArray[i]].count +=  1;
        } else {
            wordlist[wordArray[i]] = { count : 1 };
        }
    }

    return wordlist;

}

/*
Returns an array of words in numbers specified
@param copy [string]
@param chunkSize [int]
@returns [object]
*/
exports.chunk = function (copy, chunkSize) {

    var regex;

    if (typeof copy !== "string" || copy.length === 0 || typeof chunkSize !== "number") {
        return [];
    }

    regex = new RegExp("(\\S+)(\\s+\\S+){0," + (chunkSize - 1) + "}", "g");

    return copy.match(regex);
    
}