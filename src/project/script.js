let array1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NodeJS",
  "MongoDB",
  "ExpressJS",
  "Git",
  "GitHub",
  "Bootstrap",
];

const container = document.getElementById("display-list");

array1.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  container.appendChild(listItem);
});
