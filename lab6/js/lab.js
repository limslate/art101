// index.js - Car js updated
// Author: Emmet Slater
// Date: 2/28/25


//All modes of transport
myTransport = ["Ford Taurus", "Bike", "Ride from friends", "Lime scooter"]

//Collection of my car's attributes
var myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rust",
  year: 1995,
  //Age calculation function embedded in object using year from above.
  age: function() {
    return 2025 - this.year;
  }
}


//Output
document.writeln("Kinds of transport that I use: ", myTransport, "</br>");

document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");





























// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
