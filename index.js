function lowerCaseDrivers(drivers){
  return drivers.map(function (name){
    return name.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return drivers.map(function (name){
    const fullName = name.split(" ")
    const firstName = fullName[0]
    const lastName = fullName[1]

    return {firstName: firstName, lastName: lastName}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver){
    return `${driver['name']} is from ${driver['hometown']}`
  })
}
