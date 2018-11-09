var wordify = require('../wordify');
var expect = require('chai').expect;

describe('count', function () {
  it('empty string should return 0', function () {
    expect(wordify.count('')).to.equal(0);
  });

  it('invalid string should return 0', function () {
    expect(wordify.count()).to.equal(0);
  });

  it('null should return 0', function () {
    expect(wordify.count(null)).to.equal(0);
  });

  it('Lorem ipsum html string should return correct word count', function () {
    expect(wordify.count('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat.</p>')).to.equal(57);
  });

  it('Lorem ipsum string should return correct word count', function () {
    expect(wordify.count('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat')).to.equal(57);
  });
});

describe('charCount', function () {
  it('empty string should return 0', function () {
    expect(wordify.charCount('')).to.equal(0);
  });

  it('invalid string should throw', function () {
    expect(wordify.charCount()).to.equal(0);
  });

  it('null should return 0', function () {
    expect(wordify.charCount(null)).to.equal(0);
  });

  it('Lorem ipsum string should return correct character count', function () {
    expect(wordify.charCount('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat')).to.equal(355);
  });

  it('Lorem ipsum string with html should return correct character count', function () {
    expect(wordify.charCount('<p><b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat</p>')).to.equal(355);
  });
});

describe('charCountPunctuated', function () {
  it('empty string should return 0', function () {
    expect(wordify.charCountPunctuated('')).to.equal(0);
  });

  it('invalid string should return 0', function () {
    expect(wordify.charCountPunctuated()).to.equal(0);
  });

  it('null should return 0', function () {
    expect(wordify.charCountPunctuated(null)).to.equal(0);
  });

  it('Lorem ipsum string should return correct character count', function () {
    expect(wordify.charCountPunctuated('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat')).to.equal(365);
  });
});

describe('list', function () {
  it('Lorem ipsum string should return unique index', function () {
    expect(wordify.list('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat')).be.an('array');
  });

  it('should return an array of unique words', function () {
    expect(wordify.list('List of    words to     make \n\n\n unique. Returns array with lots of words. Did I say lots of words?')).to.include('array', 'did', 'i', 'list', 'lots', 'make', 'of', 'returns', 'say', 'to', 'unique', 'with', 'words');
  });
});

describe('list punctuated', function () {
  it('should handle apostrophes and hyphens', function () {
    expect(wordify.stats('don\'t you forget about-me don\'t don\'t don\'t')).to.deep.equal({ 'don\'t': { count: 4 }, you: { count: 1 }, forget: { count: 1 }, 'about-me': { count: 1 } })
  });
});

describe('stats', function () {
  it('String should return unique index', function () {
    expect(wordify.stats('the the the the man man man sat on the the the cat cat cat cat')).to.deep.equal({ the: { count: 7 }, man: { count: 3 }, sat: { count: 1 }, on: { count: 1 }, cat: { count: 4 } });
  });
});

describe('chunk', function () {
  it('String should return an empty array with invalid string', function () {
    expect(wordify.chunk(null, 2)).be.an('array');
  });

  it('String should return an array when using an invalid string', function () {
    expect(wordify.chunk('', 2)).be.an('array');
  });

  it('String should return return an array of strings of specified length', function () {
    expect(wordify.chunk('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat', 2)).be.an('array');
  });

  it('Should return array of 2 elements', function () {
    expect(wordify.chunk('this should be in first element, this should be in second element', 6).length).equal(2);
  });
});

describe('wave', function () {
  it('Invalid params should return empty array', function () {
    expect(wordify.wave()).be.an('array');
  });

  it('Invalid params should return empty array', function () {
    expect(wordify.wave('Lorem ipsum')).be.an('array');
  });

  it('Invalid array should still return an array', function () {
    expect(wordify.wave('Lorem ipsum', [1, 'test', 2])).be.an('array');
  });

  it('Lorem ipsum string should return an array', function () {
    expect(wordify.wave('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat', [5, 20, 40, 60])).be.an('array');
  });

  it('Wave array should have a lenght of 11', function () {
    expect(wordify.wave('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat', [5, 20, 40, 60]).length).equal(11);
  });
});
