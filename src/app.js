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

    let venus = PlanetModule.Venus(data);
    PlanetModule.Output(venus);

    let earth = PlanetModule.Earth(data);
    PlanetModule.Output(earth);

    let mars = PlanetModule.Mars(data);
    PlanetModule.Output(mars);

    let jupiter = PlanetModule.Jupiter(data);
    PlanetModule.Output(jupiter);

    let saturn = PlanetModule.Saturn(data);
    PlanetModule.Output(saturn);

    let uranus = PlanetModule.Uranus(data);
    PlanetModule.Output(uranus);

    let neptune = PlanetModule.Neptune(data);
    PlanetModule.Output(neptune);

  });
