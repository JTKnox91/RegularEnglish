var expect = chai.expect;

describe("RegEng", function() {
  it("should be a constructor", function() {
    expect(RegEng).to.be.a("function");
  });

  it("should make a regular expression object", function() {
    var testExp = RegEng().aLetter().make();
    expect(testExp instanceof RegExp).to.be.ok;
  });
});

describe("escape", function() {
  it("should escape special characters", function() {
    expect(RegEng().escape("\\^${}[]().*+?<>")).to.equal("\\\\\\^\\$\\{\\}\\[\\]\\(\\)\\.\\*\\+\\?\\<\\>");
  });
});

describe("Selectors", function() {
  
  describe("theString", function () {
    it("should escape user strings and make a valid RegExp", function () {
      var testExp = RegEng().theString("google.com").make();
      expect(testExp.test("google.com")).to.be.ok;
      expect(("www.google.com/?").match(testExp)[0]).to.equal("google.com");
    });
  });

  describe("aLetter", function () {
    it("should match a letter", function () {
      expect(RegEng().aLetter().make().test("a")).to.equal(true);
    });
    it("should not match match a lowercase letter if 'U' flag is present", function () {
      expect(RegEng().aLetter("U").make().test("a")).to.equal(false);
    });
    it("should not match match an uppercase letter if 'L' flag is present", function () {
      expect(RegEng().aLetter("L").make().test("A")).to.equal(false);
    });
  });

  describe("aNumber", function () {
    it("should match a number", function () {
      expect(RegEng().aNumber().make().test("1")).to.equal(true);
    });
    it("should not match not a number", function ()  {
      expect(RegEng().aNumber().make().test("a")).to.equal(false);
    });
  });

  describe("aVowel", function () {
    it("should match a vowel, and only vowels", function () {
      var testExp = RegEng().aVowel().make();
      expect(testExp.test("E")).to.equal(true);
      expect(testExp.test("F")).to.equal(false);
    });
    it("should match upper or lower case exclusively when provided a flag", function () {
      var testUpper = RegEng().aVowel("U").make();
      var testLower = RegEng().aVowel("L").make();
      expect(testUpper.test("A")).to.equal(true);
      expect(testUpper.test("a")).to.equal(false);
      expect(testLower.test("A")).to.equal(false);
      expect(testLower.test("a")).to.equal(true);
    });
    it("should match 'Y', only when the flag is provided", function () {
      var withY = RegEng().aVowel("Y").make();
      var withOutY = RegEng().aVowel().make();
      expect(withY.test("y")).to.equal(true);
      expect(withOutY.test("Y")).to.equal(false);
    });
    it("should be able to handle multiple flags", function () {
      var testExp = RegEng().aVowel("Y", "U").make();
      expect(testExp.test("Y")).to.equal(true);
      expect(testExp.test("y")).to.equal(false);
    });
  });

  describe("isConsonant", function () {
    it("should match a consonant, and only consonants", function () {
      var testExp = RegEng().aConsonant().make();
      expect(testExp.test("E")).to.equal(false);
      expect(testExp.test("F")).to.equal(true);
    });
    it("should match upper or lower case exclusively when provided a flag", function () {
      var testUpper = RegEng().aConsonant("U").make();
      var testLower = RegEng().aConsonant("L").make();
      expect(testUpper.test("B")).to.equal(true);
      expect(testUpper.test("b")).to.equal(false);
      expect(testLower.test("B")).to.equal(false);
      expect(testLower.test("b")).to.equal(true);
    });
    it("should NOT match 'Y', when the flag is provided", function () {
      var withY = RegEng().aConsonant("Y").make();
      var withOutY = RegEng().aConsonant().make();
      expect(withY.test("y")).to.equal(false);
      expect(withOutY.test("Y")).to.equal(true);
    });
    it("should be able to handle multiple flags", function () {
      var testExp = RegEng().aConsonant("L", "Y").make();
      expect(testExp.test("c")).to.equal(true);
      expect(testExp.test("B")).to.equal(false);
    });
  });

  describe("aUpperCaseLetter", function () {
    it("should only match upper case letters", function () {
      var testExp = RegEng().aUpperCaseLetter().make();
      expect(testExp.test("A")).to.equal(true);
      expect(testExp.test("Z")).to.equal(true);
      expect(testExp.test("a")).to.equal(false);
      expect(testExp.test("z")).to.equal(false);
      expect(testExp.test("1")).to.equal(false);
      expect(testExp.test(":")).to.equal(false);
    });
  });

  describe("aLowerCaseLetter", function () {
    it("should only match upper case letters", function () {
      var testExp = RegEng().aLowerCaseLetter().make();
      expect(testExp.test("A")).to.equal(false);
      expect(testExp.test("Z")).to.equal(false);
      expect(testExp.test("a")).to.equal(true);
      expect(testExp.test("z")).to.equal(true);
      expect(testExp.test("1")).to.equal(false);
      expect(testExp.test(":")).to.equal(false);
    });
  });
  
  describe("aLetterOrNumber", function () {
    it("should match any alphanumeric, but not special chars", function () {
      var testExp = RegEng().aLetterOrNumber().make();
      expect(testExp.test("A")).to.equal(true);
      expect(testExp.test("z")).to.equal(true);
      expect(testExp.test("3")).to.equal(true);
      expect(testExp.test(":")).to.equal(false);
      expect(testExp.test("-")).to.equal(false);
    });
  });  

  describe("whitespace", function () {
    it("should match whitespace, and only whitespace", function () {
      var testExp = RegEng().whiteSpace().make();
      expect(testExp.test(" ")).to.equal(true);
      expect(testExp.test("\n")).to.equal(true);
      expect(testExp.test("\t")).to.equal(true);
      expect(testExp.test("z")).to.equal(false);
      expect(testExp.test("1")).to.equal(false);
      expect(testExp.test(":")).to.equal(false);
    });
  });

  describe("anything", function () {
    it("should always match when there is something", function () {
      var testExp = RegEng().anything().make();
      expect(testExp.test(" ")).to.equal(true);
      expect(testExp.test("a")).to.equal(true);
      expect(testExp.test("X")).to.equal(true);
      expect(testExp.test("1")).to.equal(true);
      expect(testExp.test(":")).to.equal(true);
      expect(testExp.test("\\")).to.equal(true);
      expect(testExp.test("")).to.equal(false);
      expect(testExp.test("\n")).to.equal(false);
    });
  });

});

describe("Quantifiers", function() {
  
  describe("ofRange", function () {
    it("should match only a quantity in the given range", function () {
      var testExp = RegEng().fromStart().toEnd().anything().ofRange(3,4).make();
      expect(testExp.test("AA")).to.equal(false);
      expect(testExp.test("AAA")).to.equal(true);
      expect(testExp.test("AAAA")).to.equal(true);
      expect(testExp.test("AAAAA")).to.equal(false);
    });
    it("should be greedy", function () {
      var testExp = RegEng().anything().ofRange(3,4).make();
      expect(("AAAAA").match(testExp)[0]).to.equal("AAAA");
    });
  });

  describe("ofOneOrMore", function () {
    var testExp = RegEng().aLetter().ofOneOrMore().make();
    it("should match when at least one is present", function () {
      expect(testExp.test("1")).to.equal(false);
      expect(testExp.test("a1")).to.equal(true);
      expect(testExp.test("1AAAAAAA")).to.equal(true);
    });
    it("should be greedy", function () {
      expect(("AAA").match(testExp)[0]).to.equal("AAA");
    });
  });

  describe("ofAnyAmount", function () {
    var testExp = RegEng().aLetter().ofAnyAmount().make();
    it("should match for any amount", function () {
      expect(testExp.test("1")).to.equal(true);
      expect(testExp.test("a1")).to.equal(true);
      expect(testExp.test("1AAAAAAA")).to.equal(true);
    });
    it("should be greedy", function () {
      expect(("AAA").match(testExp)[0]).to.equal("AAA");
    });
  });
  describe("ofAtLeast", function () {
    it("should ");
  });
  describe("ofExactly", function () {
    it("should ");
  });


});

describe("Groups", function() {

  describe("optional", function () {
    it("should ");
  });
  
  describe("then", function () {
    it("should ");
  });

  describe("either", function () {
    it("should ");
  });

  describe("anyIn", function () {
    it("should ");
  });


});

describe("fromStart", function () {
  it("should ");
});

describe("toEnd", function () {
  it("should ");
});

describe("theRegExp", function () {
  it("should ");
});

describe("contains", function () {
  it("should ");
});

describe("Premades", function () {

  describe("password", function () {
    it("should ");
  });
  
});





