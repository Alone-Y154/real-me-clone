var circle = document.querySelector("#circle");
var upbtn = document.querySelector("#up-btn");
var downbtn = document.querySelector("#down-btn");
var rotateValue = circle.style.transform;

upbtn.addEventListener("click", function() {
  var rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
});

downbtn.addEventListener("click", function() {
  var rotateSum = rotateValue + "rotate(+90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
});
