let shapeShifter = document.getElementById("ShapeShifter");
let btcircle = document.getElementById("circle");
let btsquare = document.getElementById("square");
let btrectangle = document.getElementById("rectangle");
let bttriangle = document.getElementById("triangle");

function changeCircle() {
  shapeShifter.style.borderRadius = "50%";
  shapeShifter.style.backgroundColor = "lightblue";
  shapeShifter.style.borderLeft = "0px";
  shapeShifter.style.borderRight = "0px";
  shapeShifter.style.borderBottom = "0px";
  shapeShifter.style.width = "200px";
  shapeShifter.style.height = "200px";
}

function changeSquare() {
  shapeShifter.style.borderRadius = "0";
  shapeShifter.style.backgroundColor = "lightgreen";
  shapeShifter.style.borderLeft = "0px";
  shapeShifter.style.borderRight = "0px";
  shapeShifter.style.borderBottom = "0px";
  shapeShifter.style.width = "200px";
  shapeShifter.style.height = "200px";
}

function changeRectangle() {
  shapeShifter.style.borderRadius = "0";
  shapeShifter.style.width = "400px";
  shapeShifter.style.height = "200px";
  shapeShifter.style.backgroundColor = "lightcoral";
  shapeShifter.style.borderLeft = "0px";
  shapeShifter.style.borderRight = "0px";
  shapeShifter.style.borderBottom = "0px";
}

function changeTriangle() {
  shapeShifter.style.width = "200px";
  shapeShifter.style.height = "200px";
  shapeShifter.style.borderLeft = "100px solid transparent";
  shapeShifter.style.borderRight = "100px solid transparent";
  shapeShifter.style.borderBottom = "200px solid goldenrod";
  shapeShifter.style.backgroundColor = "transparent";
}
btcircle.addEventListener("click", changeCircle);
btsquare.addEventListener("click", changeSquare);
btrectangle.addEventListener("click", changeRectangle);
bttriangle.addEventListener("click", changeTriangle);

// select by id

// Select by ID
const title = document.getElementById("mainTitle");
console.log("By ID:", title.textContent);

// Select by Class
const infoElements = document.getElementsByClassName("info");
console.log("By Class:", infoElements[0].textContent);

// Select by Tag
const listItems = document.getElementsByTagName("li");
console.log("By Tag:", listItems[1].textContent);

// Select by querySelector (first match)
const firstTech = document.querySelector(".tech");
console.log("By querySelector:", firstTech.textContent);

// Select by querySelectorAll (all matches)
const allTech = document.querySelectorAll(".tech");
allTech.forEach((el, index) => {
  console.log(`querySelectorAll [${index}]:`, el.textContent);
});

// Manipulate elements
const logo = document.getElementById("logo");
logo.style.border = "2px solid red";

const button = document.getElementById("changeBtn");
button.addEventListener("click", () => {
  title.style.color = "blue";
  infoElements[0].textContent = "Text changed after button click!";
});

// Create and append new element
