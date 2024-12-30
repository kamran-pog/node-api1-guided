// This import is calling from node_modules now
const express = require("express")

const db = require("./database.js")

const server = express()

// This is installing some middleware to allow express
// to parse JSON request bodies. We'll go more into detail about this later.
server.use(express.json())

// to define a route
// "/" will be the home page.
server.get("/users", (req, res) => {
    // uses the "getUsers" function
    const users = db.getUsers()
    // calls users
    res.json( users )
})

// anytime the endpoint matches "/users/:id" that value will get pulled into a variable.
server.get("/users/:id", (req, res) => {
    // The param variable matches up to the name of our URL param above
    const user = db.getUserById(req.params.id)

    // We should always validate data coming from the client.
    // Here we are using an "if" statement to validate it before we use it.
    if (user) {
        res.json(user)
    } else{
        res.status(404).json({
            message: "User not found"
        })
    }
})

server.post("/users", (req, res) => {
    if (!req.body.name){
        return res.status(400).json({
            message: "Need a name for the user"
        })
    }

    const newUser = db.createUser({
        name: req.body.name
    })

    res.status(201).json(newUser)({
        message: "New user created"
    })
})

server.put("/users/:id", (req, res) => {

    const user = db.getUserById(req.params.id)

    if (user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name || user.name
        })

        res.json(updatedUser)
    } else {
        res.status(404).json({
            message: "User not found"
        })
    }

    res.status(201).json(updateUser)({
        message: "Updated user"
    })
})

server.listen(8080, () => {
    console.log("server started on port 8080")
})