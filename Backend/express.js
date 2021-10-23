let express = require("express")
let app = express()
let cors = require('cors')
let MySQL = require("./mysql.js").MySQL
let mysql = new MySQL()

console.log('yo')

app.use(cors())

app.get("/items", async (req, res) => {
    let items = await mysql.getItems()
    res.send(items)
})

app.post("/register", (req, res) => {
    res.send(mysql.register(req.username, req.pass))
})

app.post("/login", (req, res) => {
    res.send(mysql.login(red.username, req.pass))
})

app.listen(6969)