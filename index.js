const express=require('express')
const cors=require('cors')
const db=require('./db')
const app=express();
const PORT=8000;


app.use(express.json())
app.use(cors());

app.listen(PORT,()=>{
    console.log(`MY SERVER IS LISTEN ${PORT}`);
})