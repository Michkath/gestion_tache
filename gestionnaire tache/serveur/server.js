// const http = require('http');
// const app = require('./app');
// app.set('port',process.env.PORT || 3000)
// const server = http.createServer(app);

// server.listen(process.env.PORT || 3000);

const express = require("express");
require("dotenv").config;

const app = require("./app");
const db = require("./database");

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}.`);
});