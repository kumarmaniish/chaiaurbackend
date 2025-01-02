require('dotenv').config();
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/login',(req,res)=>{
    res.send("<h1> login <b>Manish</b></h1> ");
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>This is You tube</h2>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is running at ${process.env.PORT}`);
})