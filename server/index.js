const express = require("express");
const bodyParser = require("body-parser");
// const mysql = require("mysql");
const cors = require("cors");
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// const db = mysql.createConnection({
//     host: process.env.MYSQLHOST,
//     port: process.env.MYSQLPORT,
//     database: process.env.MYSQLDATABASE,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
// });

// db.connect(function(err) {
//     if (err) {
//       console.log("error occured! " + err.message);
//       return;
//     }
//     console.log("Connected!");
// });

app.post("/api/createUser", (req, res)=> {
    try {

        // we can save the data recieved in the database

        res.status(200).json({"message":"user saved"});
    } catch (error) {
        res.status(500).json({"error": "internal server error"});
    }
});

const port = process.env.serverPort | 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})