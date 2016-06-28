(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let PlanetModule = require("./planets");

//reference to out put div
let outputDiv = $("#output-div");


var PlanetAJAX = function() {
  return new Promise((resolve, reject) => {
    //AJAX request for planets.json
    $.ajax({
      url: "planets.json",
      //passes the parsed json object to print function
    }).done( function(data) {
      console.log(data);
      resolve(data);
      });
  }); // end promise object
};// end Planet AJAX function


PlanetAJAX()
  .then(function(data) {
    let mercury = PlanetModule.Mercury(data);
    PlanetModule.Output(mercury);

    let earth = PlanetModule.Earth(data);
    PlanetModule.Output(earth);

  });

},{"./planets":5}],2:[function(require,module,exports){
"use strict";

function getEarthOb(select) {
  return select.planets[0].earth;
}

module.exports = getEarthOb;

},{}],3:[function(require,module,exports){
"use strict";

function getMercuryOb(select) {
  return select.planets[0].mercury;
}

module.exports = getMercuryOb;

},{}],4:[function(require,module,exports){
"use strict";


function outputToDom(message) {
  //reference to out put div
  let outputDiv = $("#output-div");

  let planet = message;

  for ( var key in planet ) {
    let string = key + ":   ";
    string += planet[key];
    outputDiv.append(`<p>${string}</p>`);
  }
  outputDiv.append('<p>&nbsp</p>');
}

module.exports = outputToDom;

},{}],5:[function(require,module,exports){
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

},{"./earth":2,"./mercury":3,"./outputfunc":4}]},{},[1])


//# sourceMappingURL=bundle.js.map
