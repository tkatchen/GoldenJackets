import Deck from "react-poker";
import "./styles.css";
import React, {Component} from 'react';

// import "react-poker/styles.css"

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{ left: "10vw", top: "10vh", position: "absolute" }}>
        Welcome to the Casino!
      </div>
    );
  }
}

export default AppContainer;