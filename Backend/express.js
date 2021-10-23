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
    res.send(await mysql.getCards())
})

app.post("/addCards", (req, res) => {
    mysql.getCards().then(async p => {
        cards = [...p]
        cards.push(...req.query.cards)
        await mysql.updateCards(cards)
        res.send(cards)
    })
})

app.listen(6969)