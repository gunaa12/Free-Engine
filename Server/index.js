//imports
const express = require("express");
const app = express();
const mysql = require("mysql");
const fs = require('fs');

//port running confirmation
app.listen(3001, () => {
  alert("Yey, your server is running on port 3001");
});