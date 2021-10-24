import "./styles.css";
import React, {Component} from 'react';
import {cards, getHand, Ranks, setCardsClean} from '../Util/cardHelper.js'
import {username, password} from '../Util/auth.js'
import axios from 'axios'

// import "react-poker/styles.css"
let arr = ["AS", "KD", "7S", "8H", "TC"]

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : [],
      selectedID : []
    }
  }

  async generateCoupon() {
    if(this.state.selected.length < 5) return
    let headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    let body = {
      username: username,
      pass: password,
      cards: this.state.selected
    }

    await axios.post("http://localhost:6969/redeemCards", headers, {params:body})
    .then(async (res) => {
      body = {
        username: username,
        pass:password
      }
      await axios.get("http://localhost:6969/getCards", {params:body})
      .then(res2 => {
        setCardsClean(res2.data)
      })

      res.data
    })
  }

  getClicked(card, id){
    if(this.state.selectedID.indexOf(id) != -1) {
      let resID = [...this.state.selectedID]
      resID.splice(this.state.selectedID.indexOf(id), 1)
      let res = [...this.state.selected]
      res.splice(this.state.selected.indexOf(card),1)
      this.setState({
        selected:res,
        selectedID:resID
      })
      document.getElementById(id).style = ""
    } else {
      if(this.state.selected.length >= 5) return
      this.setState({
        selected:[...this.state.selected,card],
        selectedID:[...this.state.selectedID,id]
      })
      document.getElementById(id).style = "border: 5px solid coral;"
    }
  }

  render() {
    let imgs = cards.map((card, i) => {
      return(
        <img src={"card_images/"+card+".png"} id={i} onClick={() => this.getClicked(card, i)}>
        </img>
      )
    })
    return (
      <div>
        <div>
          {(this.state.selected.length == 5) ? "Current Hand: " + Ranks[getHand(this.state.selected)] : "Please select 5 cards"}
        </div>
        <button className="btn" type="submit" onClick={() => this.generateCoupon()}>Generate Coupon</button>
        {imgs}
      </div>
    );
  }
}

export default AppContainer;