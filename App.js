const express = require('express');
const app = express();

app.get('/names', (req, res)=>{
    res.send("Youssouf");
})

app.listen(5000, () =>{
    console.log("server is running on port 5000");
})