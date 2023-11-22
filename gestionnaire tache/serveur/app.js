const express = require('express');
bodyParser = require('body-parser');
const authori = require("./middleweare/authmiddleweare")
cors = require('cors');


// serveur
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var corsOptions = {
    origin: '*'
  }
  app.use(cors(corsOptions));

// erreur cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

 
const UserRoute = require('./routes/user.route');
app.use("/api/users", UserRoute);

const tacheroute = require("./routes/tache.route")
app.use("/api/taches", tacheroute)

const calendarroute = require("./routes/calendar.route")
app.use("/api/calendar", calendarroute)

// const contactroute = require("./routes/contact.route")
// app.use("/api/contact", contactroute)

module.exports = app;