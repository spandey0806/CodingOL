function username() {
  var name = "India";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var printName = username();
printName();

// Output :  India

function username() {
  var name = "India";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

username()();

/**
 * Write a function that would allow you to do this
 *  var addSix = createBase(6);
 *     addSix(10)   // 16
 *     addSix(21)   // 27
 */

function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

var addSix = createBase(6);
addSix(10);
addSix(21);
