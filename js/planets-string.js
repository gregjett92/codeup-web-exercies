(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetArray = planetsString.split('|');
    console.log(planetsString)
    console.log(planetArray);



    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var newPlanet = planetArray.join('<br>');

    console.log(newPlanet);
     /*
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.

      */
    function returnList(arr) {}
    var planetsList = "<ul>";
    planetArray.forEach(function(planet){
    });
        planetsList += "<ul>";


})();
