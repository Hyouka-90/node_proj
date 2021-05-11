const express = require('express')

const app = express()

const PORT = process.env.PORT|| 8080

app.get('/',(req,res) => res.send('Hello World!!!'))

app.get('/ammy',(req,res) => res.send('Miss u!!'))

app.get('/send/:name',(req,res) =>{
    res.send('Sended '+req.params.name)
})

app.listen(PORT,() => {
    console.log('Server is running on port : '+PORT )
})

module.exports = app
