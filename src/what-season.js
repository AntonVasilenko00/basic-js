module.exports = function getSeason(date) {
  if(!date)
    return 'Unable to determine the time of year!';
  checkDate = new Date();
  if(Object.prototype.toString.call(date) != Object.prototype.toString.call(checkDate))
    throw new Error("Tricky error");



  let res = "";
  let month = date.getMonth();
  if(month >= 0 && month <= 1 || month == 11)
    res =  "winter";
  if(month >= 2 && month <= 4)
    res =  "spring";
  if(month >= 5 && month <= 7)
    res =  "summer";
  if(month >= 8 && month <=10 )
    res = "autumn";
  return res;
};
