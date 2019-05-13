function lowerCaseDrivers(driversArr){
  return driversArr.map(function(name){
    return name.toLowerCase();
  });
}

function nameToAttributes(driversArr){
  return driversArr.map(function(name){
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];
    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(driversArr){
  return driversArr.map(function(driver){
    let name = driver.name;
    let hometown = driver.hometown;
    let phrase = `${name} is from ${hometown}`;
    return phrase;
  });
}
