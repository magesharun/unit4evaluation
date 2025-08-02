const express=require('express');

const mongoose=require('mongoose');

const app=express();

app.use(express.json());

const PORT=3000;

app.get('/',(req,res)=>{
    console.log("hello");
    
})

mongoose.connect('mongodb://localhost:27017/ecommerce')
app.use('/products',require('./routes/productRoute'));
app.use('/order',require('./routes/orderRoute'));
app.use('/user',require('./routes/userRoute'))



app.listen(PORT,()=>{
    console.log(`server is connected to ${PORT}` );
    
})

