// index.js - Car js updated
// Author: Emmet Slater
// Date: 5/8/25

function randomMath(x){
    var results = x + 4;// your operation on x here
    return results;
}
console.log("What is 6 + 4?", randomMath(6));
console.log("What is 10 + 4?", randomMath(10));
console.log("What is 2 + 4?", randomMath(2));

array = [0, 4, 6, 10, 12];

console.log("What about an array? [0, 4, 6, 10, 12] + 4?", array.map(randomMath));

array.map(function(x){
    var results = x - 4;
    return console.log("What is ", x, " ss- 4?", results);
})
var mapResults = array.map(randomMath);
console.log("Results: ", mapResults);