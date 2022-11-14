// Given an array of strings, return only the strings that have exactly 4 characters.
// I need code to look at all elements through the array and length of each element.
// Which is when I use my conditional, using an "if" statement my code was able to read the indivifual elements by lenght.
// Console.log then prints returned elements with 4 characters.

var friends = ["tom", "jerry", "hugh", "jess", "sara"]
for (var i = 0; i < friends.length; i++){
    // var friend = friends[i]
    if (friends[i].length === 4){
    console.log(friends[i])}
}
