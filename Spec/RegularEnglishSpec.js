var specs = [
{ assertion: "Should create global RegEng constructor",
  actual: RegEng,
  relation: "to be a",
  expect: "function",
  test: function() {
    return typeof this.actual === this.expect;
  },
},
{ assertion: "Should escape special characters",
  actual: RegEng().escape("\\^${}[]().*+?<>"),
  relation: "to equal",
  expect: "\\\\\\^\\$\\{\\}\\[\\]\\(\\)\\.\\*\\+\\?\\<\\>",
  test: function() {
    return this.actual === this.expect;
  },
},
];

for (var i = 0; i < specs.length; i++) {
  var spec = specs[i];
  if (!spec.test()) {
    console.log(
      spec.assertion, "Falied\nExpected",
      spec.actual, spec.relation, spec.expect
    );
  }
}
console.log("Tests Complete");