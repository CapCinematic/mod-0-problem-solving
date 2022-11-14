// Start with an array of strings. Print only the words that include the letter combination "ing".
// Search though my activities to produce words ending in "ing" only. Using a varible, condition and log.
// First time using includes as a method was most succeccful.

var activities = ["driving", "hockey", "eating", "sleeping", "hopscotch"];
    for (i = 0; i < activities.length; i++){
        if (activities[i].includes ("ing")){
            console.log(activities[i])
        }
    } 