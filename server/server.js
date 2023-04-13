require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan");
const app = express();
 
app.use(express.json())

app.use((req, res, next) => {
    console.log("This is our second middelware");
    next();
});

//Get all concerts
app.get("/api/v1/concerts", async (req, res) => {

 const results = await db.query("select * from concerts")
 ;
 console.log(results);
 res.status(200).json({
    status: "success",
    data: {
        concert: ["Oldies", "Rap", "R&B"]

    },
 });
});


// Get a single Concert
app.get("/api/v1/concerts/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            concert: "Oldies"
        }
    })
} ) ;

// How to create a single listing for Concert

app.post("/api/v1/concerts", (req, res) => {
    console.log(req);
    res.status(201).json({
        status: "success",
        data: {
            concert: "Oldies"
        }
    })
} ) ;

// Update 

app.put("/api/v1/concerts/:id" , (req, res) => {
console.log(req.params.id);
console.log(req.body);
res.status(200).json({
    status: "success",
    data: {
        concert: "Oldies"
    }
})
} ) ;

// Delete

app.delete("/api/v1/concerts/:id", (req, res) => {
    res.status(204).json({
        status: "success",
        
    })
} ) ;



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log (`server is up and listening on port ${port}`)
});
