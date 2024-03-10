// Importing required modules
const http = require("http"); // Importing the built-in HTTP module
const fs = require("fs"); // Importing the built-in File System module

// Setting up server configuration
const PORT = 2000; // Defining the port number for the server
const hostName = "localhost"; // Defining the hostname for the server

// Reading HTML files and storing their content
const home = fs.readFileSync("./home.html", "utf-8"); // Reading the content of "home.html" file
const contact = fs.readFileSync("./contact.html", "utf-8"); // Reading the content of "contact.html" file
const about = fs.readFileSync("./about.html", "utf-8"); // Reading the content of "about.html" file
const errorPage = fs.readFileSync("./errorPage.html", "utf-8"); // Reading the content of "errorPage.html" file

// Creating a HTTP server
const server = http.createServer((request, response) => {
    // Handling different URL routes
    if (request.url === "/home") return response.end(home); // If request URL is "/home", respond with the content of "home.html"
    else if (request.url === "/contact") return response.end(contact); // If request URL is "/contact", respond with the content of "contact.html"
    else if (request.url === "/about") return response.end(about); // If request URL is "/about", respond with the content of "about.html"
    else return response.end(errorPage); // For any other URL, respond with the content of "errorPage.html"
});

// Making the server listen for incoming requests
server.listen(PORT, hostName, () => {
    console.log(`Server is working at port ${PORT}`); // Logging a message when the server starts listening
});
