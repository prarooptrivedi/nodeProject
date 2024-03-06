const http = require('http')
const fs = require('fs')
const url = require('url')
console.log("sdsdh")
const data =[
    {id:1,name:'shivam'},
    {id:2,name:'shsdssvam'},
    {id:3,name:'shiassvam'},
    {id:4,name:'shivam'},
]
const createServers = http.createServer((req,res)=> {
    if(req.url ==="./favicon.ico") return res.end;
    const log = `${req.url}: new Request received`
    const myUrl = url.parse(req.url,true)
    console.log("my url ====",myUrl)
    fs.appendFile('../server/log.txt',log,(err,data)=>{
        switch(myUrl.pathname) {
            case "/" :
            res.end(JSON.stringify(data))
            break;
            case "/about" :
                const userName = myUrl.query.myname
                res.end(`hi ${userName}`)
                break;
            case '/search' :
                const search = myUrl.query.search_query;
                res.end('here is the result '+ search)
        }
        // console.log("req===",req)
        // console.log("new request received")
       
    })
    
});

createServers.listen(8000,()=>{
    console.log("server started")
})

http.get('http://localhost:8000/',()=>{
    console.log("dshdsh")
})