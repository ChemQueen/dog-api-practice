console.log("script.js loaded");

console.log("files reviewed");

let data = fetch("https://dogapi.dog/api/v2/facts");
console.log(data);

// declares an async funcion so it can use await and always returns a Promise
async function getDogFact() {
    // send an HTTP GET request and pauses until the server responds
    // response is a Response object w headers and body stream that hasn't been read yet
    const response = await fetch("https://dogapi.dog/api/v2/facts");
    // reads the Response object body and parses it as JSON into a JS object
    const data = await response.json();
    console.log(data);
    const fact = data.data[0].attributes.body;

    // update the DOM with the dog fact
    const output = document.getElementById("dog-fact-output");
    output.textContent = fact;
}

/* This function now:
•	Uses fetch() to request data from the Dog API and then awaits the response.
•	Converts the response to readable JSON using .json() and we also await here since it requires waiting for the Promise to be resolved.
•	Gets the dog fact and prints it to the console.
•	Updates the DOM with the returned dog fact
This is nice, but we want 
*/

// getDogFact()

const button = document.getElementById("fetch-dog-btn");

button.addEventListener("click", function () {
    getDogFact();
});