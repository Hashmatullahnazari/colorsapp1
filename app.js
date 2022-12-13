function changeColor() {
  var color = document.getElementById("color").value;
  var div = document.getElementById("colorDiv");
  div.style.height = "200px";
  div.style.width = "";
  div.style.backgroundColor = color;
}
