const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send('Welcome to the world');
})

app.listen(port,()=>{
    console.log('listening on port',port)   
});