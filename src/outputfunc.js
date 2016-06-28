"use strict";


function outputToDom(message) {
  //reference to out put div
  let outputDiv = $("#output-div");

  for ( var key in message ) {
    let string = key + ":   ";
    string += message[key];
    outputDiv.append(`<p>${string}</p>`);
  }
  outputDiv.append('<p>&nbsp</p>');
}

module.exports = outputToDom;
