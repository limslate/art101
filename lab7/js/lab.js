/*
 * sortUserName - a function that takes user input and sorts the letters
 * of their name
 */
function rearrangeUserName() {
    var userName = window.prompt("Input username to be alphabetized");
    console.log("userName =", userName);
    // convert to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // return into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Return the new name
    return nameSorted;
}

// output
document.writeln("New name: ",
    rearrangeUserName(), "</br>");
