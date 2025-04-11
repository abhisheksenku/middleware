const express = require('express');
const app = express();
const port = 4000;
app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})
app.get('/products',(req,res)=>{
    res.send('Here is the list of all products.')
})
app.get('/categories',(req,res)=>{
    res.status(200).send('Here is the list of all categories.')
})
app.post('/products', (req, res) => {
    
    res.status(201).send('A new product has been added.');
});
app.post('/categories', (req, res) => {
    
    res.status(201).send('A new category has been added.');
});
app.use((req,res)=>{
    res.status(404).send('<h1>404 - Page Not Found</h1>');
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})