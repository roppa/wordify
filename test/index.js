var wordify = require("../index"),
	expect = require('chai').expect;

describe("count", function() {
	
	it('empty string should return 0', function() {
		expect(wordify.count("")).to.equal(0);
	});

	it('invalid string should return 0', function() {
		expect(wordify.count()).to.equal(0);
	});

	it('null should return 0', function() {
		expect(wordify.count(null)).to.equal(0);
	});

	it('Lorem ipsum html string should return correct word count', function() {
		expect(wordify.count("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat.</p>")).to.equal(57);
	});

	it('Lorem ipsum string should return correct word count', function() {
		expect(wordify.count("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat")).to.equal(57);
	});

});

describe("charCount", function () {
	
	it('empty string should return 0', function() {
		expect(wordify.charCount("")).to.equal(0);
	});

	it('invalid string should return 0', function() {
		expect(wordify.charCount()).to.equal(0);
	});

	it('null should return 0', function() {
		expect(wordify.charCount(null)).to.equal(0);
	});

	it("Lorem ipsum string should return correct character count", function () {
		expect(wordify.charCount("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat")).to.equal(355);
	});

});

describe("charCountWithCharacters", function () {
	
	it('empty string should return 0', function() {
		expect(wordify.charCountWithCharacters("")).to.equal(0);
	});

	it('invalid string should return 0', function() {
		expect(wordify.charCountWithCharacters()).to.equal(0);
	});

	it('null should return 0', function() {
		expect(wordify.charCountWithCharacters(null)).to.equal(0);
	});

	it("Lorem ipsum string should return correct character count", function () {
		expect(wordify.charCountWithCharacters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat")).to.equal(365);
	});

});

describe("list", function () {

	it("Lorem ipsum string should return unique index", function () {
		expect(wordify.list("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta leo eget euismod. Sed eleifend arcu sed blandit euismod. Nam sed adipiscing eros, quis mattis urna. In a dolor eu est tempor commodo. Nunc tristique metus sit amet tortor molestie congue. Nulla consectetur mi justo, eu ultricies felis volutpat at. Vivamus facilisis enim nec posuere volutpat")).be.an("array");
	});

});
