// Given an array of strings, return only the words that begin with the letter "t".
// Thinking about my goal I thought about what the be the best method, I tried .includng but found another method .charat.
// Breaking it down step by step I needed to understan where my condition would read characters only.
// I got stuck but partnered with Joe for clariftication.


var cars = ["toyota", "suburu", "tesla", "gmc", "ford"];
for (var i = 0; i < cars.length; i++){
    if (cars[i].charAt(0) === "t"){
    console.log(cars[i]);
    };
};