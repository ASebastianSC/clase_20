const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer( { dest: 'profile-pictures/'})
const app = express()

app.use(cors());

function profileHandler(req, res) {
    console.log(req.body.name)
    console.log(req.file)
    res.status(200).end()
}

app.put('/profile', upload.single('avatar'), profileHandler)
app.listen(9000)