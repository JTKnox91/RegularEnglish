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

});

describe("Quantifiers", function() {
  
  describe("", function () {
    it("should ");
  });

});

describe("Groups", function() {
  
  describe("", function () {
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





