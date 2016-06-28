"use strict";

//references each planet js file
let Mercury = require("./mercury");
let Venus = require("./venus");
let Earth = require("./earth");
let Mars = require("./mars");
let Jupiter = require("./jupiter");
let Saturn = require("./saturn");
let Uranus = require("./uranus");
let Neptune = require("./neptune");

//references the output function module
let Output = require("./outputfunc");

let Planets = {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Output

};// store required files in an object

module.exports = Planets;// export the object
