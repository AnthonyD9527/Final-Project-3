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
//ROUTES
//Get all concerts
app.get("/api/v1/concerts", async (req, res) => {

    try{
        const results = await db.query("select * from concerts")
        ;
        console.log(results);
        res.status(200).json({
             status: "success",
            results: results.rows.length,
             data: {
            concerts: results.rows

            },
        });
 } catch (err) {
    console.log(err);
 }
});


// Get a single Concert
app.get("/api/v1/concerts/:id", async (req, res) => {
    console.log(req.params.id);

    try {
        const results = await db.query( "select * from concerts where id = $1", [
            req.params.id, ]);

        res.status(200).json({
            status: "success",
            data: {
                concert: "results.rows[0],"
            },
        });
        
        } catch (err){
            console.log(err)
    }


} ) ;

// How to create a single listing for Concert

app.post("/api/v1/concerts",async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO concerts (name,location , price_range) values ($1, $2,$3) returning *",[req.body.
            name, req.body.location, req.body.price_range])
            console.log(results)
            res.status(201).json({
                status: "success",
                data: {
                    concert: results.rows[0],
                },
            });

     } catch (err) {
        console.log(err)

        }
   
} ) ;

// Update 

app.put("/api/v1/concerts/:id" ,  async (req, res) => {

    try {
        const results = await db.query
        ("UPDATE concerts SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
         [req.body.name, req.body.
        location, req.body.price_range, req.params.id]
         );
       

         res.status(200).json({
            status: "success",
            data: {
                concert: results.rows[0]
            },
        });

    } catch (err){
        console.log(err)
    }
 console.log(req.params.id);
 console.log(req.body);

} ) ;

// Delete

app.delete("/api/v1/concerts/:id", async (req, res) => {

    try {

    } catch(err) {
        
    }
    res.status(204).json({
        status: "success",
        
    })
} ) ;

//^^^^^^^^^^^^^^^^^^ ROUTES ^^^^^^^^^^^^^^^^^//

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log (`server is up and listening on port ${port}`)
});
