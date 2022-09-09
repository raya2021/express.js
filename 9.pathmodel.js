
//path module(informations about the path)
const path =require('path')
console.log(path.sep)
const filePath =path.join('/main/','submain','text.text')
console.log(filePath)

const base =path.basename(filePath)
console.log(base)

console.log(path.resolve(__dirname,'main','submain','text.text'))