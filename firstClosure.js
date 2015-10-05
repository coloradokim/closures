//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeFunc() {
  var name = "Kim";
  function displayName() {
    console.log(name);
  }
  return displayName
};
var kimFunc = makeFunc()
kimFunc()
