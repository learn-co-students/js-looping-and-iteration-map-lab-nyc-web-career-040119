// Code your solution in this file.
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function lowerCaseDrivers(driversArr) {
  const lowcasedArr = driversArr.map(driver => lowercaseName(driver) );
  return lowcasedArr;
}
  function lowercaseName(driverName) {
    let lowercaseName = driverName.toLowerCase();
    return lowercaseName;
  }


  // const drivers = [
  //   'Bobby Smith',
  //   'Sammy Watkins',
  //   'Sally Jenkins',
  //   'Annette Sawyer',
  //   'Sarah Hucklebee',
  //   'bobby ridge'
  // ];
function nameToAttributes(driversArr) {
  const firstLastNestedArray = driversArr.map(driverName => splitNameReturnObj(driverName));
  return firstLastNestedArray;
}
function splitNameReturnObj(fullName) {
  let splitName = fullName.split(" ");
  const nameObject = {
    firstName: splitName[0],
    lastName: splitName[1]
  };
  return nameObject;
}

const drivers = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];



function attributesToPhrase(driversArr) {
  let driverAttr = driversArr.map(driver => getDriverAttrs(driver));
  return driverAttr;
}


function getDriverAttrs(driverObj) {
  let name = driverObj["name"];
  let hometown = driverObj["hometown"];
  return(`${name} is from ${hometown}`);
}
// function lowerCaseDrivers(driversArr) {
//     function map(driversArr, lowerCaseDrivers) {
//       const lowcaseArr = [];
//       for (const driverName of driversArr) {
//           let driver = driversArr[driverName];
//           let driverLowcase = driver.toLowerCase();
//           lowcaseArr.push(lowerCaseDrivers(`${driverLowcase}`));
//       }
//       return lowcaseArr;
//   }
//   lowcaseArr;
// }
//   let lowcaseDrivers = [];
//   for (let i=0; i < driversArr.length; i++) {
//     let driverName = driversArr[i];
//     let lowcaseDriverName = driverName.toLowerCase();
//     lowerCaseDrivers = lowerCaseDrivers.concat(lowcaseDriverName);
//
//   }
//   return lowcaseDrivers;
// }
