let express = require("express")
let app = express()
let cors = require('cors')
let MySQL = require("./mysql.js").MySQL
let mysql = new MySQL()
let {getHand, values, CARDS} = require("../src/Util/cardHelper.js")

app.use(cors())

app.post("/register", async (req, res) => {
    res.send(await mysql.register(req.query.username, req.query.pass))
})

app.post("/login", async (req, res) => {
    res.send(await mysql.login(req.query.username, req.query.pass))
})

app.get("/getCards", async (req, res) => {
    let returned = await mysql.getCards(req.query.username, req.query.pass)
    res.send(returned)
})

app.post("/purchase", (req, res) => {
    let amt = Math.floor(req.query.cost / 50)
    let cards = []
    for(let i = 0; i < amt; i++) {
        cards.push(CARDS[Math.floor(Math.random() * CARDS.length)])
    }

    mysql.getCards(req.query.username, req.query.pass).then(async p => {
        if(p == 0) return res.send("x")
        combined = (p) ? [...p] : []
        cards.push(...combined)
        await mysql.updateCards(cards, req.query.username, req.query.pass)
        res.send(cards)
    })
})

app.post("/redeemCards", (req, res) => {
    mysql.getCards(req.query.username, req.query.pass).then(async p => {
        for(card of req.query.cards) {
            let index = p.indexOf(card)
            if(index == -1) return res.send("x")
            p.splice(index,1)
        }
        await mysql.updateCards(p, req.query.username, req.query.pass)
        let hand = getHand(req.query.cards)
        let value = values[hand]
        let code = Buffer.from(req.query.username+value.toString()+Math.random().toString()).toString('base64')
        await mysql.generateCoupon(value, code)
        res.send(code)
    })
})

app.get("/getCouponValue", async (req, res) => {
    res.send(await mysql.getCouponValue(req.query.code))
})

app.post("/removeCoupon")

app.listen(6969)