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