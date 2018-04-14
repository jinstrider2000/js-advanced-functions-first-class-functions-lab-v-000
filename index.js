// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
}
function countdown(callback) {
  window.setTimeout(callback,2000);
}

function createMultiplier(number) {
  let num = number;
  return (num) => num * number;
}

function createMultiplierBonus() {
  doubler = createMultiplier(2);
  tripler = createMultiplier(3);
}

function multiplier(value1, value2) {
  return value1 * value2;
}

createMultiplierBonus();

doublerWithBind = multiplier.bind(null,2);
triplerWithBind = multiplier.bind(null,3);
