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
    res.send(await mysql.register(req.query.username, req.query.pass))
})

app.post("/login", async (req, res) => {
    res.send(await mysql.login(req.query.username, req.query.pass))
})

app.get("/getCards", async (req, res) => {
    let cards = await mysql.getCards()
    res.send(Array.from(cards[0].cards.data))
})

app.post("/addCard", async (req, res) => {
    let cards = await mysql.getCards()
    cards.push(req.query.card)
    await mysql.updateCards(cards)
    res.send(cards)
})

app.listen(6969)