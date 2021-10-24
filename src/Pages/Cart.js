import React, {Component} from "react";
import './Cart.css'
import { DefaultContext } from "react-icons/lib";
import cart from "../Util/cart";
import axios from 'axios'
import {setCardsClean} from '../Util/cardHelper.js'
import { Redirect } from 'react-router-dom';
import auth from '../Util/auth.js'

class Cart extends Component {
    constructor() {
        super()
    }

    async purhcase() {
        let headers = {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
        console.log(auth.password)
        let body = {
            cost : this.price,
            username: auth.username,
            pass: auth.password
        }

        await axios.post("http://localhost:6969/purchase", headers, {params:body})
        .then(async (res) => {
            if(res.data == "x") {
                document.getElementById("result").innerHTML = "Not logged in. Redirecting..."
                setTimeout(() => {
                    return this.setState({redirect:true})
                }, 2000)
            } else {
                if(res.data) setCardsClean(res.data)
                document.getElementById("result").innerHTML = "Successfully Purchased"
                cart.cart = []
                setTimeout(() => {
                    this.setState({refresh:true})
                },2000)
            }
        })
    }
    state={redirect:false, refresh:false}
    render() {
        if(this.state.redirect) {
            this.state.redirect = false
            return <Redirect to={"/Login"} />
        }
        let rows = []
        this.price = 0
        for(let item of cart.cart) {
            this.price += item.price
            rows.push(
                <div className="row">
                    <div className="cartColumn">
                        {item.product_name}
                    </div>
                    <div className="cartColumn">
                        ${item.price}
                    </div>
                </div>
            )
        }

        return(
            <div className='cart'>
                <h1>Shopping Cart</h1>
                <div className="row">
                    <div className="cartColumn">
                        <div className="cartHeader"><b>Item</b></div>
                    </div>
                    <div className="cartColumn">
                        <div className="cartHeader"><b>Price</b></div>
                    </div>
                </div>
                <div id = "rows">
                    {rows}
                </div>
                <div className="total">Total: ${this.price}</div>
                <div className="cardTotal">You will earn {Math.floor(this.price/50)} cards for this purhcase!</div>
                <button className="btn purchaseButton" onClick={() => this.purhcase()}>Purchase!</button>
                <div id="result" className="result"></div>
            </div>
        );
    }
}

export default Cart;
