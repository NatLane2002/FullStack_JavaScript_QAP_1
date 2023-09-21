const axios = require("axios");

// Make an HTTP GET request to a sample API
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    // Log the response data to the console
    console.log("Response Data:");
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error.message);
  });
