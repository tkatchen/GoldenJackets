exports.cart = []

exports.addToCart = (item) => {
    this.cart.push(item)
    console.log(this.cart)
}