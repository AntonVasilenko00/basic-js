class VigenereCipheringMachine {
  constructor(bool){
    if(bool === true)
      this.direct = true;
    else if(bool === false)
      this.direct = false;
    else
      this.direct = true;
  }
  encrypt(str,key) {
    if(str === undefined || key === undefined)
      throw new Error;
    
  }    
  decrypt(str,key) {
    if(str === undefined || key === undefined)
    throw new Error;
  }
}

module.exports = VigenereCipheringMachine;
