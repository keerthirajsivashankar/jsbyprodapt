// Create a promise
const myPromise = new Promise((resolve, reject) => {
  let success = true; // try changing to false

  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

// Use the promise
myPromise
  .then((result) => {
    console.log(result); // runs if resolved
  })
  .catch((error) => {
    console.error(error); // runs if rejected
  })
  .finally(() => {
    console.log("Promise finished (resolved or rejected).");
  });
