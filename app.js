require('dotenv').config();
const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var morgan = require("morgan");
const cors = require('cors');
const mongoConnect = require('./db/mongoConnect')
const PORT = process.env.PORT || 5000;
const app = express();
app.use(morgan('dev'));
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
async function main(){  
  db = await mongoConnect.connect();
}
app.use(require('./routes'));
app.listen(PORT, ()=>{
    console.log("Listening to port "+PORT);
})
try {
  main();
} catch (error) {
  console.log(error);
}