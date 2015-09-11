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
  thisString: function(str) {
    //TODO: escape special charcters
    return RegEng(this.self + "(" + str + ")");
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
      optionsStr += strArr[i] + "|";
    }
  },
  ofOneOrMore: function() {
    return RegEng(this.self + "+");
  },
  ofZeroOrOne: function() {
    return RegEng(this.self + "?");
  },
  ofAny: function() {
    return RegEng(this.self + "*");
  }
};

var test = RegEng().fromTheStart().aLetterOrNumber().ofZeroOrOne().then().aNumber().ofOneOrMore().toTheEnd();

console.log(test.toString());
console.log(test.test("a1")); //true
console.log(test.test("11")); //true
console.log(test.test("aa")); //false
console.log(test.test("aa1")); //false
