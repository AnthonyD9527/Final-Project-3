// IMPORTING PG LIBRARY VVVVVVVVVV
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "concerts",
    password: "Bolts!9527",
    port: 5432,
});
module.exports = {
    query: (text, params ) => pool.query(text, params),
};