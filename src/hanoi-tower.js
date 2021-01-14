module.exports = function calculateHanoi(disksNumber, turnspeed) {
  let turns = (2**disksNumber) - 1;
  let seconds = Math.floor((turns/turnspeed)*60*60);
  return {turns,seconds};
};
