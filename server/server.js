require("dotenv").config();
const express = require("express")

const app = express() 

app.get("/getConcerts", (req, res) => {
    console.log("get all concerts")
});
console.log("test");

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log (`server is up and listening on port ${port}`)
});
