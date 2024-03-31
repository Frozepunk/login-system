// const express=require('express');

// const router=express.Router();

// router.get('/',(req,res)=>{
//     res.render('index');
// })
// router.get ('/register',(req,res)=>{
//     res.render('register');
// })
// router.get ('/login',(req,res)=>{
//     res.render('login');
// })
// module.exports=router


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    // Process login credentials here
    res.render('login');
});

module.exports = router;
