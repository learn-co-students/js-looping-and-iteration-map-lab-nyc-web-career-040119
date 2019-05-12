function lowerCaseDrivers(drivers) {
  return Object.assign([], drivers.map(
    function (driver) {
      return driver.toLowerCase();
    }
  ));
}

function nameToAttributes(drivers) {
  const newDrivers = [];
  drivers.map(function (driver) {
    const fullName = driver.split(' ');
    newDrivers.push({
      firstName: fullName[0],
      lastName: fullName[1]
    });
  });
  return newDrivers;
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
