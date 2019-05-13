// Code your solution in this file.
function lowerCaseDrivers(object) {
  return object.map(driver => driver.toLowerCase())
}

function nameToAttributes(object) {
  return object.map(function(driver) {
    return {'firstName': driver.split(' ')[0], 'lastName': driver.split(' ')[1]}
  });
}

function attributesToPhrase(object) {
  return object.map(driver => `${driver.name} is from ${driver.hometown}`)
}
