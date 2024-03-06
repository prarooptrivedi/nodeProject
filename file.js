const { log } = require('console')
const fs =  require('fs')
// fs.writeFileSync('./shivam.txt','hey shivam React develoer')
fs.writeFile('./shivam.txt','hey shivam React develoer 3 year',(err)=>{
   console.log("error===",err)
})

const read = fs.readFile('./contact.txt',"utf-8",(err,resp)=>{
    console.log("ee==",err,resp)
})
console.log(read)<
fs.appendFileSync('./contact.txt',new Date().getDate().toLocaleString())