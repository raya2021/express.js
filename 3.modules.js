//commonJS ,every file is module (by default)
//module -Encapsulated code (only share minimum)
//const {azher,raya}=require('./4-names')
const names = require('./4-names')
//like import names from ('./4-names')
const sayHi =require('./5.utilize')
const data =require('./6.alternative-flavor')
//once its invoked by this way it will be executed
require("./7.mindGrenade")
/*sayHi('sausan')
sayHi(names.azher)
sayHi(names.raya)
console.log(data)*/