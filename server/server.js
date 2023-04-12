require("dotenv").config();
const express = require("express")

const app = express() 

app.use((req, res, next) => {
    console.log("yeah our middelware");
    next();
})

app.get("/api/v1/concerts", (req, res) => {
 res.status(404).json({
    status: "sucess",
    data: {
        concert: ["Oldies", "Rap", "R&B"]

    },
 });
});


// Get a single Concert
app.get("/api/v1/concerts/:concertid", (req, res) => {
    console.log(req.params);
} ) ;

// How to create a single listing for Concert

app.post("/api/v1/concerts", (req, res) => {
    console.log(req);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log (`server is up and listening on port ${port}`)
});
