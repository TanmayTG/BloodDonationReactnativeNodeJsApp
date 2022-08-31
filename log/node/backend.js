const express = require('express');
const app=express();
const port=8000;

app.get('/t',(req,res)=>{
    res.send('hello world')
});

app.get('/',(req,res)=>{
    res.json({success: true,message : 'welcome'})
})

app.listen(8000,()=>{
    console.log('port is listening');
});