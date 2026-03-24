let array1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let arrayTechnology = new Array(
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "AWS",
  "Flask",
  "FastAPI",
);

let doublearray = new Array(array1.length);

let index = 0;

array1.forEach((element) => {
  doublearray[index] = element * 2;
  index++;
});

// console.log(doublearray);

function searchTecnology(technology) {
  return technology === "React";
}

console.log(arrayTechnology.find(searchTecnology));

console.log(arrayTechnology.filter((technology) => technology.length > 5));

console.log("+++++++++++++++++++++map+++++++++++++++++++++");

console.log(arrayTechnology.map((technology) => technology.toUpperCase()));
