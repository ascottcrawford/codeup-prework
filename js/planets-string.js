(function(){
    "use strict";

    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    var planetsAsString = planets.join("|");
    console.log(planetsAsString);

    // TODO: Convert planetsString to an array, save it to planetsArray.

    var planetsAsArray = planetsAsString.split("|");
    console.log(planetsAsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();