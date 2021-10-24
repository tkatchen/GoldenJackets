exports.username = ""
exports.password = ""
exports.code = []

exports.setUsername = (user) => {
    this.username = user
}

exports.setPassword = (pass) => {
    this.password = pass
}

exports.setCode = (code, value) => {
    this.code = [code, value]
}