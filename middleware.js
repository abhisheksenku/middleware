const express=  require('express');
const app = express();
const port = 3200;
app.use((req,res,next)=>{
    req.user = 'Guest';
    next();
})
app.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome , ${req.user}</h1>`)
})
app.listen(port,()=>{
    console.log("server is running");
})