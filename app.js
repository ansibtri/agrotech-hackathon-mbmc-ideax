const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
      res.json("Hello, This is agrotech")
})
app.listen(PORT, ()=>{
      console.log(`Server is listening at ${PORT}`);
})