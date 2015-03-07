#Wordify

A set of utilities for authors to get meta data from content and generally to play with words.

##Usage

```
var wordify = require('wordify');
```

##list

Get a unique list of words from content. 

```
var list = wordify.list("List of words to make unique. Returns array with lots of words. Did I say lots of words?");
```

Result:

```
["array", "did", "i", "list", "lots", "make", "of", "returns", "say", "to", "unique", "with", "words" ]
```

##stats

Returns an object with words and occurrances

```
var words = wordify.stats("the the the the man man man sat on the the the cat cat cat cat");
```

Returns:

```
{
	the: { count: 7 }, 
	man: { count: 3 }, 
	sat: { count: 1 }, 
	on: { count: 1 }, 
	cat: { count: 4 }
}
```

##chunk

Break copy up based on the number of words you want in each chunk. Pass in the copy to be chunked, and the number of words in each chunk. Returns an array of strings. 

```
wordify.chunk("this should be in first element, this should be in second element", 6)
```

Returns:

```
["this should be in first element,", "this should be in second element"]
```

##count

Count the number of words in a string, removing any HTML and punctuation

```
var count = wordify.count("<p>List of words</p>");
```

Returns:

```
3
```

##charCount

Returns the length of characters in a string. It strips out html and punctuation marks.

##charCountWithCharacters

Returns the length of characters in a string including punctuation marks.