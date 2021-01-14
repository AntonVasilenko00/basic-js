const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  // Validation
  if(typeof str != 'string' || str == undefined || str.length == 0)
  return false;
  
  let num = +str;

  // Validation
  if(isNaN(num) || typeof num != 'number')
    return false;
  if(num >= 9000 || num <= 0)
    return false;
  if(Math.trunc(num) != num && Math.trunc(num) >= 15)
    return false;
    // Calculation
  let result = Math.log(MODERN_ACTIVITY/num)/HALF_LIFE_PERIOD*Math.log(2);
  return result;
};
