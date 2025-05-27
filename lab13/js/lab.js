// index.js - lab12
// Author: Emmet Slater
// Date: 5/26/25

function fizzBuzz() {
  let outputStr = "";

  // Loop from 1 to 200
  for (let i = 1; i <= 200; i++) {
    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }
    
    if (i % 5 === 0) {
      result += "Buzz";
    }

    if (i % 7 === 0) {
      result += "Boom";
    }

    if (result === "") {
      result = i;
    } else {
      result = i + " " + result + "!";
    }

    outputStr += result + "<br>";
  }

  $("#output").html(outputStr);
}

fizzBuzz();