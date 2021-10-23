let express = require("express")
let app = express()
let cors = require('cors')
let MySQL = require("./mysql.js").MySQL
let mysql = new MySQL()

app.use(cors())

app.get("/items", async (req, res) => {
    res.send(await mysql.getItems())
})

app.post("/register", async (req, res) => {
    res.send(await mysql.register(req.username, req.pass))
})

app.post("/login", async (req, res) => {
    res.send(await mysql.login(red.username, req.pass))
})

app.listen(6969)