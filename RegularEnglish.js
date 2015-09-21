window.RegEng = function(flags) {
  newInstance = Object.create(RegEngMethods);
  newInstance.current = "";
  newInstance.groups = [];
  newInstance.fromStart = false;
  newInstance.toEnd = false;
  return newInstance;
};

var RegEngMethods = {
  make: function () {
    //TODO: include error handling for invalid expressions
    var regExpStr = this.fromStart ? "^" : "";
    if (this.groups.length) {
      if (this.current.length) {
        this.groups.push(this.current);
      }
      regExpStr += "(" + this.groups.join(")(") + ")";
    }
    else {
      regExpStr += this.current;
    }
    regExpStr += this.toEnd ? "$" : "";
    return new RegExp(regExpStr);
  },

  escape: function (string) {
    /*FULL LIST OF SPECIAL CHARACTERS FOR REFERENCE:
      \ ^ $ {} [] () . * + ? <>
      (hyphen will be handled circumstanctially)
    */
    var escapees = {
      "\\": "\\\\",
      "^" : "\\^",
      "$" : "\\$",
      "{" : "\\{",
      "}" : "\\}",
      "[" : "\\[",
      "]" : "\\]",
      "(" : "\\(",
      ")" : "\\)",
      "." : "\\.",
      "*" : "\\*",
      "+" : "\\+",
      "?" : "\\?",
      "<" : "\\<", 
      ">" : "\\>" 
    };
    return string
      .split("")
      .map(function (char) {
        return escapees[char] || char;
      })
      .join("");
  },

};
