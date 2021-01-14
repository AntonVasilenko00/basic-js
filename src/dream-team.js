module.exports = function createDreamTeam(array) {
  if(!Array.isArray(array) || array.length == 0)
    return false;
  let res = "";
  let sortedArray = [];
  //validating incorrect types
  sortedArray = array.filter(el => typeof el == "string" && el.length != 0 ? true : false);
  //Sorting the correct way
  sortedArray = sortedArray.map((el) => {return el.trim().toLowerCase();});
  sortedArray.sort();
  // Adding firstLetter to result
  sortedArray.forEach(el => {
    if(typeof el == 'string' && el.length != 0)
      res += el.trim()[0].toUpperCase();
  });
  return res;
};
