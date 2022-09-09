
const {readFile,writeFile}=require('fs')

readFile('./main/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    return
})


readFile('./main/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        
    }
    console.log(result)
    const second=result
})



writeFile(
    './main/result-sync.txt',
    `Here is the result:1,${second}`,(err,result)=>{
        if(err){
            console.log(err)
           
        }
        console.log(result)
    })

    //both the same time