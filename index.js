// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return Object.assign(drivers.map(function(name){
    return name.toLowerCase();
  }))
}

function nameToAttributes(arr){
  return arr.map(function(name){
    const firstName = name.split(" ")[0]
    const lastName = name.split(" ")[1]
    return {firstName: firstName , lastName: lastName}
  })
}

function attributesToPhrase(arr){
  return arr.map(function(person){
    return `${person.name} is from ${person.hometown}`
  })
}
