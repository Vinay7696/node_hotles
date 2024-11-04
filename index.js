// start the progrem commond is "npm start"
const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());




app.get("/", function (req, res) {
  res.send("welcome to my code channel ");
});



 


// Import  The router file 
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes =  require('./routes/menuItemRoutes');
// use the Routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes );


app.listen(3000, () => {
  console.log("listening on port 3000");
});
