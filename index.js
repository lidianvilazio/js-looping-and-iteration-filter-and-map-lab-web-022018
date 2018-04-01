// Code your solution here:
function driversWithRevenueOver (arr, r) {
  return arr.filter(function (arr) {
    return arr.revenue > r;
  });
}

function driverNamesWithRevenueOver (arr, r) {
  return driversWithRevenueOver(arr, r)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch (arr, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (arr, m) {
  return exactMatch(arr, m)
    .map(function (driver) {
      return driver.name;
    });
}
