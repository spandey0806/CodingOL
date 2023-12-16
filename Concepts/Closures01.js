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
