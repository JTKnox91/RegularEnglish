var RegEng = function(str) {
  newInstance = Object.create(RegEngMethods);
  newInstance.self = str || "(";
  return newInstance;
};

var RegEngMethods = {
  end: function() {
    console.log("Attempting to make RegExp with:", this.self + ")");
    return new RegExp(this.self + ")");
  },
  then: function() {
    return RegEng(this.self + ")(");
  },
  fromTheStart: function() {
    return RegEng("^(");
  },
  toTheEnd: function() {
    console.log("Attempting to make RegExp with:", this.self + ")$");
    return new RegExp(this.self + ")$");
  },
  theString: function(str) {
    str = this.escapeStr(str);
    return RegEng(this.self + str);
  },
  aLetterOrNumber: function() {
    return RegEng(this.self + "\\w");
  },
  aNumber: function() {
    return RegEng(this.self + "\\d");
  },
  anything: function() {
    return RegEng(this.self + ".");
  },
  either: function(strArr) {
    var optionsStr = "(";
    for (var i = 0; i < strArr.length; i ++) {
      optionsStr += this.escapeStr(strArr[i]) + "|";
    }
    //this is a hack, find a more elegant solution
    optionsStr += ")";
    optionsStr.replace("|)", ")");
    return RegEng(this.self + optionsStr);
  },
  escapeStr: function(str) {
    str = str.replace(".", "\\.");
    //TODO: Escape more special characters
    return str;
  },
  ofOneOrMore: function() {
    return RegEng(this.self + "+");
  },
  ofZeroOrOne: function() {
    return RegEng(this.self + "?");
  },
  ofAnyAmount: function() {
    return RegEng(this.self + "*");
  }
};

var test = RegEng().fromTheStart().aLetterOrNumber().ofZeroOrOne().then().aNumber().ofOneOrMore().toTheEnd();

var emailTest = 
  RegEng()
    .aLetterOrNumber().ofOneOrMore().then()
    .theString("@").then()
    .aLetterOrNumber().ofOneOrMore().then()
    .theString(".").then()
    .either(["com","net","org"])
  .end();

console.log(test.toString()); // /^(\w?)(\d+)$/
console.log(test.test("a1")); // true
console.log(test.test("11")); // true
console.log(test.test("aa")); // false
console.log(test.test("aa1")); // false

console.log(emailTest.toString()); // /(\w+)(@)(\w+)(\.)((com|net|org|))/
console.log(emailTest.test("unodrummer@yahoo.org")); // true
console.log(emailTest.test("not an email")); // false
console.log(emailTest.test("nodomain@.com")); // false
console.log(emailTest.test("something@domain.net")); // true 
console.log(emailTest.exec("something@domain.net")[1]); // something
