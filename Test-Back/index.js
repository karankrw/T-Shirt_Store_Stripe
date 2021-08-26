const express = require("express");
const app = express();

const port = 8000;


const admin = (req, res) => {
    return res.send("Hi, Admin here");
}

const isAdmin = (req, res, next) => {
    console.log("isAdmin running");
    next();
}

const isLoggedIn = (req, res, next) => {
    console.log("isLoggedIn running");
    next();
}

app.get("/admin",isLoggedIn, isAdmin ,admin);





app.get("/", (req, res) => {
    return res.send("hello...");
});

app.get("/login", (req, res) => {
    return res.send("Logged In...");
});

app.get("/signout", (req, res) => {
    return res.send("Signed Out...");
});

app.get("/karan", (req, res) => {
    return res.send("Karan Waghela speaking...");
});

app.get("/order", (req, res) => {
    return res.send("Order Placed...");
});


app.listen(port, () => {
    console.log("Server is up and running...")
});