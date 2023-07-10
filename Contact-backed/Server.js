const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors')


connectDb();

const app = express();

const port = process.env.PORT || 50001;
app.use(cors({
    origin:["https://nodejs-mu.vercel.app/"],
    methods:["POST","GET"],
    credentials: true

}))
app.use(express.json());
app.use('/api/contact', require('./routes/contactRoutes'));
app.use(errorHandler);


app.listen( port , ()=>{
    console.log("I am runing on port ", port)
})