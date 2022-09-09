// Away to read the content of other files directly
const {readFileSync,writeFileSync}=require('fs')
//const fs =required('fs')  //fs.
const first =readFileSync('./main/first.txt','utf8')
const second =readFileSync('./main/second.txt','utf8')
console.log(first,second)

//this func generate a path(file) content the fellowing info 
writeFileSync('./main/result-sync.txt',`Here is the result:${first} ,${second}`,{flag:'a'})


//line by line