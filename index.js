console.log('sakhawat ali');

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/goolge', (req, res) => {
    res.send('sakhawat ali')
})

app.get("/Login", (req, res) => {
    res.send("<h1>sakhawat ali</h1>")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})
