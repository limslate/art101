// index.js - lab9
// Author: Emmet Slater
// Date: 5/12/25

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add button to problem section
$("#problem").append("<button id='button-problem'>Make Special</button>");
// add button to reflection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");
// add button to output section
$("#output").append("<button id='button-output'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
// add a click listener to the problem button
$("#button-problem").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problem").toggleClass("special");
});
// add a click listener to the reflection button
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});
// add a click listener to the output button
$("#button-output").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#output").toggleClass("special");
});