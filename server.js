//import express

const express = require("express");
const app = express();
const port = 8000;

// express configuration
// make sure these lines are above any app.get or app.post codes
app.use(express.json());
// recognize JSON object
app.use(express.urlencoded({extended: true}) );
// to recognize the incoming Request object as strings or arrays

// temporary database
const users = [
    {firstName: "Jay", lastName: "Park"},
    {firstName: "Brian", lastName: "Chang"},
    {firstName: "Tony", lastName: "Sopras"}
];


// routing
app.get("/api/testing", (req, res) => {
    res.json({message: "Hello World"})
})

// get all
app.get("/api/users", (req, res) => {
    res.json(users)
})

// get one
app.get("/api/users/:idx", (req, res) => {
    const idx = req.params.idx
    res.json(users[idx])
})

// create a user - pushing a new obj into users
app.post("/api/users", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
})

// update
app.put("/api/users/:idx", (req, res) => {
    //get params from req
    const idx = req.params.idx
    //get req.body
    const updatedUser = req.body
    users[idx] = updatedUser
    res.json(users[idx])
})

// delete
app.delete("/api/users/:idx", (req, res) => {
    const idx = req.params.idx
    users.splice(idx, 1)
    res.json({status: "ok"})
})

app.listen(port, () => console.log("listening on port 8000"));