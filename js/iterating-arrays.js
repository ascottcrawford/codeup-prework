
    

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
var names = ['Joe', 'Sarah', 'Bob', 'James', 'Scott'];
    // TODO: Create a log statement that will log the number of elements in the names array.
console.log("There are " + names.length + " names in the names array.");
    // TODO: Create log statements that will print each of the names array elements individually.

console.log("For loop:");

for (var i = 0; i < names.length; i++) {
	console.log("Name at index: " + i + " is " + names[i]);
}

console.log("ForEach loop:");

names.forEach(function (element, index, array) {
	console.log("Name at index: " + index + " is " + element);
});




