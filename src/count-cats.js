module.exports = function countCats(array) {
  if(array.length == 0 || array == undefined)
    return 0;
  let count = 0;
  for(i = 0; i < array.length; i++)
    for(j = 0; j < array[i].length; j++) {
      if(array[i][j] == "^^")
        count++;
    }
  return count;
};
