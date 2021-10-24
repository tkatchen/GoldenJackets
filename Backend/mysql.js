mysql = require("mysql")

module.exports.MySQL = class MySQL {
    constructor() {
        this.connection = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"tyler",
            database:"GoldenJackets"
        })

        this.connection.connect()
    }

    register(username, pass) {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO users (username, pass, cards) \
            values ("${username}", "${pass}", "");`,
            (error, results, fields) => {
                if(error) resolve(false)
                resolve(true)
            })
        })
    }

    login(username, pass) {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM users WHERE \
            username="${username}" and pass="${pass}"`,
            (error, results, fields) => {
                if(error) resolve(null)
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }

    getCards(username, pass) {
        return new Promise((resolve, reject) => {
            if(!username || !pass) return resolve(0)
            this.connection.query(`SELECT cards FROM users WHERE \
            username="${username}" and pass="${pass}"`,
            (error, results, fields) => {
                if(error) throw error
                // Figuring this one out was a blast...
                if(!Buffer.from(JSON.parse(JSON.stringify(results))[0].cards.data).toString("utf8")) {
                    resolve([])
                    return
                }
                resolve(JSON.parse(JSON.parse(JSON.stringify(Buffer.from(Buffer.from(JSON.parse(JSON.stringify(results))[0].cards.data).toString("utf8").match(/.{2}/g).map(x => "0x"+x), "hex").toString("utf8")).replace(/\u0000/g,""))).join("").match(/.{2}/g))
            })
        })
    }

    updateCards(cards, username, pass) {
        return new Promise((resolve, reject) => {
            if(!username || !pass) return
            this.connection.query(`UPDATE users SET cards="${Buffer.from("[\""+cards.join("\",\"")+"\"]").toString("hex")}" \
            WHERE username="${username}" and pass="${pass}"`,
            (error, results, fields) => {
                if(error) throw error
                resolve(1)
            })
        })
    }

    generateCoupon(value, code) {
        return new Promise((resolve, reject) => {
            this.connection.query(`insert into coupons (code, value) values ("${code}", ${value})`,
            (error, results, fields) => {
                if(error) throw error
                resolve(1)
            })
        })
    }

    getCouponValue(code) {
        return new Promise((resolve, reject) => {
            this.connection.query(`select value from coupons where code="${code}"`,
            (error, results, field) => {
                if(error) resolve(null)
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }

    removeCoupon(code) {
        return new Promise((resolve, reject) => {
            this.connection.query(`insert into coupons (code, value) values ("${code}", ${value})`,
            (error, results, fields) => {
                if(error) throw error
                resolve(1)
            })
        })
    }
}