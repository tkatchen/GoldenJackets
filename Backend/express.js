let express = require("express")
let app = express()
let cors = require('cors')
let MySQL = require("./mysql.js").MySQL
const { request } = require("express")
let mysql = new MySQL()
let {getHand, values} = require("../Util/cardHelper.js")

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

app.post("/redeemCards", (req, res) => {
    mysql.getCards().then(async p => {
        for(card of req.query.cards) {
            let index = p.indexOf(card)
            if(index == -1) return res.send(null)
            p.splice(index,1)
        }
        await mysql.updateCards(p)
        let hand = getHand(req.query.cards)
        console.log(hand)
        let value = values[hand]
        let code = Buffer.from(this.username+value.toString()+Math.random().toString()).toString('base64')
        console.log(code)
        await mysql.generateCoupon(value, code)
        res.send(value)
    })
})

app.listen(6969)