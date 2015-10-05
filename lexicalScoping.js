//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init () {
  var name = "Kim";
  function displayName() {
    console.log(name);
  }
  displayName()
}
init();
