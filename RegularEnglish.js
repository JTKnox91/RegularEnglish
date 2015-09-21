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

  theString: function (string) {
    this.current += this.escape(string);
    return this;
  },

  aLetter: function () {
    var flags = getFlags.call(arguments);
    if (flags.U) {
      this.current += "[A-Z]";
    }
    else if (flags.L) {
      this.current += "[a-z]";
    }
    else {
      this.current += "[A-Za-z]";
    }
    return this;
  },

  aNumber: function () {
    this.current += "\\d";
    return this;
  },

  aVowel: function () {
    var flags = getFlags.call(arguments);
    var vowels = flags.Y ? "aeiouy" : "aeiou";
    if (flags.U) {
      vowels = vowels.toUpperCase();
    }
    else if (flags.L) {
      void 0;
    }
    else {
      vowels += vowels.toUpperCase();
    }
    this.current += "[" + vowels + "]";
    return this;
  },

  aConsonant: function () {
    var flags = getFlags.call(arguments);
    var consonants = !flags.Y ? "bcdfghjklmnpqrstvwxyz" : "bcdfghjklmnpqrstvwxz";
    if (flags.U) {
      consonants = consonants.toUpperCase();
    }
    else if (flags.L) {
      void 0;
    }
    else {
      consonants += consonants.toUpperCase();
    }
    this.current += "[" + consonants + "]";
    return this;
  }

};

/*HELPERS*/
var getFlags = function (offset) {
  var args = Array.prototype.slice.call(this, offset || 0);
  var flags = {};
  for (var i = 0; i < args.length; i++) {
    flags[args[i]] = true;
  }
  return flags;
};   
