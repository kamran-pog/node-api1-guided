const http = require("http")

// createServer() is a function
// As a parameter in the function createServer we are 
// going to have a call back with the parameters request and response.
// The request parameter gives us information about the http request.
// We use that info to form a response to send back to the client/user.
const server = http.createServer((req, res) => {
    // as a reminder, a status code of 200 means "success".
    res.statusCode = 200

    // we also have to send back a header so we help the browser know whats being sent back.
    res.setHeader("Content-Type", "text/html")

    // "write" is sending back some data. In this case "Hello, World".
    res.write("<h1>Hello, World</h1>")

    // This sends the data back to the client/browser.
    res.end()
})

// web servers need to be listening continously for incoming requests.
server.listen(8080, () => {
    console.log("server started on port 8080")
})