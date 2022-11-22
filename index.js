// Code your solution here
function findMatching(drivers, name) {
    let matching = drivers.filter((driver) => 
     driver === name.toUpperCase() ||
     driver === name ||
     driver === name.toLowerCase()
    )
    return matching;
};

function fuzzyMatch(drivers, name) {
    let providedLetters = drivers.filter((driver) =>
    driver.substring(0,2) === name.substring(0,2)
    )
    return providedLetters;
};

function matchName(drivers, name) {
    let match = drivers.filter((driver) => 
    driver.name === name
    )
    return match;
}