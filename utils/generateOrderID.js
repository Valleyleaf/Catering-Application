let generateid = () =>{
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  module.exports = generateid;

//Random ID generator for OrderID's