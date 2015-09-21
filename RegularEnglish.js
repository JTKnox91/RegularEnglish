window.RegEng = function(str) {
  newInstance = Object.create(RegEngMethods);
  newInstance.self = "";
  newInstance.groups = [];
  return newInstance;
};
