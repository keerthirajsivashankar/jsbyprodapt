// Fetch data from a public API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // convert response to JSON
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//async await

async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();
