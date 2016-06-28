"use strict";

 // finds the add file, must be in the same directory. Don't need add.js, just name of file
let Mercury = require("./mercury");
let Earth = require("./earth");
let Output = require("./outputfunc");

let Planets = {
  Mercury,
  Earth,
  Output

};// store required files in an object

module.exports = Planets;// export the object
