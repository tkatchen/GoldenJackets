import React, { Component } from "react";
import Card from "./components/Card.jsx" ;
import ActionsButtons from "./components/ActionsButtons.jsx" ;
import { deckArray } from "./utils/DeckArray";



class Poker extends Component {

  constructor() {
    super();
    this.state = {
      cardsArray: deckArray,
      cardPicked: [],
      cardsSelected: [],
      front: true
    };
  };

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };
    this.setState({ cardsArray: array, cardPicked: [] })
    return array;
  };

  viewYourCards = () => {
    let cardsArray = this.state.cardsArray;
    const randomItem = cardsArray[Math.floor(Math.random()*cardsArray.length)];
    let cardsPickedArray = this.state.cardPicked;
    cardsPickedArray.length <= 52 &&
    cardsPickedArray.push(randomItem);
    this.setState({ cardPicked: cardsPickedArray })
  };

  flip = () => {
    this.setState({ front: !this.state.front})
  };

  selectCards = () => {
    this.setState({cardsSelected})
  }


  render() {
    const cardsArray = this.state.cardsArray;
    const cardsPickedArray = this.state.cardPicked;

    return (
      <div style={{ width: "100%" }}>
        <div  style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px", height: 282 }}>
          {cardsArray && cardsArray.map((card, index) => {
            return (
              <div className="animated slideInDown" key={index}>
                <Card suits={card.suits} card={card.card} color={card.color} front={false}/>
              </div>
            ); 
          })}
        </div>
        <ActionsButtons shuffle={this.shuffle} viewYourCards={this.viewYourCards} flip={this.flip} deckArray={deckArray} />
        <div style={{ display: "flex", justifyContent: "center", margin: "40px auto 0px 180px" }}>
          {cardsPickedArray && cardsPickedArray.map((card, index) => {
            return (
              <div className="animated slideInUp" key={index}>
                <Card suits={card.suits} card={card.card} color={card.color} front={true}/>
              </div>
            ); 
          })}
        </div>
      </div>
    );
  };
};


export default Poker;