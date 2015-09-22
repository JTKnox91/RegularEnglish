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
  
  describe("", function () {
    it("should ");
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





