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
