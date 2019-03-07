function myFunction() {
  
  var x = document.getElementById("hide");
  var y = x;
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}