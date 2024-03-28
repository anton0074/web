const express = require('express')
const path = require("path")
const fs = require("fs")
const {request} = require("express")
const app = express() //объект веб-сервера (конструктор)
const port = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("static"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>>>>>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err) => {
        if (err) {
            res.status(500).send("User not added")
        } else {
            res.status(201).send("User added")
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

