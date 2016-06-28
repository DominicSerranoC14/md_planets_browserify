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
