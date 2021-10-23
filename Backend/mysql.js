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

    getItems() {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT * FROM items", (error, results, fields) => {
                if(error) throw error;
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }

    register(username, pass) {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO users (username, pass, cards) \
            values ("${username}", "${pass}", \"[]\");`,
            (error, results, fields) => {
                if(error) resolve(false)
                this.username = username
                this.pass = pass
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
                this.username = username
                this.pass = pass
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }

    getCards() {
        return new Promise((resolve, reject) => {
            if(!this.username || !this.pass) return
            this.connection.query(`SELECT cards FROM users WHERE \
            username="${this.username}" and pass="${this.pass}"`,
            (error, results, fields) => {
                if(error) throw error
                resolve(JSON.parse(JSON.stringify(results)))
            })
        })
    }

    updateCards(cards) {
        return new Promise((resolve, reject) => {
            if(!this.username || !this.pass) return
            this.connection.query(`UPDATE users SET cards=${JSON.stringify(cards)} \
            WHERE username="${username}" and pass="${pass}"`,
            (error, results, fields) => {
                if(error) throw error
                resolve(results.cards)
            })
        })
    }
}