#Wordify

A set of utilities for authors to get meta data from content.

##Usage

```
var wordify = require('wordify');
```

##list

Get a unique list of words from pasted content.

```
var list = wordify.list("List of words to make unique. Returns array");
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

##listDetails

Returns an object with words and occurrances

```
var words = wordify.listDetails("the the the the man man man sat on the the the cat cat cat cat");
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


##charCount

Returns the length of characters in a string. It strips out html and punctuation marks.

##charCountWithCharacters

Returns the length of characters in a string including punctuation marks.