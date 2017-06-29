# Wordify

A set of utilities for authors to get meta data from content and generally to play with words.

![Build status](https://api.travis-ci.org/roppa/wordify.svg?branch=master "Build status")

## Usage

```javascript
var wordify = require('wordify');
```

## list

Get a unique list of words from content. 

```javascript
var list = wordify.list("List of words to make unique. Returns array with lots of words. Did I say lots of words?");
```

Result:

```javascript
["array", "did", "i", "list", "lots", "make", "of", "returns", "say", "to", "unique", "with", "words" ]
```

## stats

Returns an object with words and occurrances

```javascript
var words = wordify.stats("the the the the man man man sat on the the the cat cat cat cat");
```

Returns:

```javascript
{
	the: { count: 7 }, 
	man: { count: 3 }, 
	sat: { count: 1 }, 
	on: { count: 1 }, 
	cat: { count: 4 }
}
```

## chunk

Break copy up based on the number of words you want in each chunk. Pass in the copy to be chunked, and the number of words in each chunk. Returns an array of strings. 

```javascript
wordify.chunk("this should be in first element, this should be in second element", 6)
```

Returns:

```javascript
["this should be in first element,", "this should be in second element"]
```
## wave

Break copy up in varying lengths forming a "wave". Lengths are characters to break into chunks at lengths specified. The length is used to find the closest space. Sizes go up, and then down, and repeated.

```javascript
wordify.wave("the cat sat on the mat. The cat sat on the mat", [3, 5, 10])
```
Returns:
```javascript
["the", "cat sat", "on the mat"]
```

## count

Count the number of words in a string, removing any HTML and punctuation

```javascript
var count = wordify.count("<p>List of words</p>");
```

Returns:

```javascript
3
```

## charCount

Returns the length of characters in a string. It strips out html and punctuation marks.

## charCountWithCharacters

Returns the length of characters in a string including punctuation marks.
