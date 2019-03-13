function fname() {
  var firstName = document.getElementById("fn").value;
  console.log("fn");
  debugger;
  if (fn == "") {
    alert("Name must be filled out");
    return false;
  }
  else {
    alert("good work");
    document.getElementById("output").innerHTML = "name";
  }
}
