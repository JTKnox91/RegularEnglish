var specs = [
{
  assertion: "Should create global RegEng constructor",
  actual: RegEng,
  relation: "to be an",
  expect: "object",
  test: function() {
    return typeof actual === "function";
  }
}
];

for (var i = 0; i < specs.length; i++) {
  var spec = specs[i];
  if (spec.test()) {
    console.log(
      spec.assertion, "Falied\nExpected",
      spec.actual, spec.relation, spec.expect
    );
  }
}
console.log("Tests Complete");