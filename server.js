const express = require('express');
const app = express();
const port = 4000;
const orderRoute = require('./routes/orders');
const userRoute = require('./routes/users');
app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})
app.use('/orders',orderRoute);
app.use('/users',userRoute);

app.use((req,res)=>{
    res.status(404).send('<h1>404 - Page Not Found</h1>');
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
///////please check the below code////////////
///I combined all the files here////////////
////you can extract them////////////
const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.send('Order list');
})
router.post("/",(req,res)=>{
    res.send('Order created')
})
module.exports = router;
/////////////////////////////
const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.send('User list');
})
router.post("/",(req,res)=>{
    res.send('User created')
})
module.exports = router;