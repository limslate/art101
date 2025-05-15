// index.js - lab9
// Author: Emmet Slater
// Date: 5/15/25

function generateRandomText() {
    const text = "Oh, riiiiight. The poison. The poison for Kuzco, the poison chosen especially to kill Kuzco, Kuzco's poison... That poison?";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Kronk text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Kronk text
    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
