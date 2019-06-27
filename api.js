const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());

app.get('/', (request, response) => {
    response.json({
        appName: 'SeñoraTube',
        version: '1.0.0'
    })
})

app.use((req, res) => {
    res.status(404).send('nothing here').endsWith()
})
app.listen(9000)