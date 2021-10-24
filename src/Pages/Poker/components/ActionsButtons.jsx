import React from "react";
import PropTypes from "prop-types";

const ActionsButtons = (props) => {
  return (
    <div style={{ margin: "40px auto", textAlign: "center", marginLeft:"20 px"}}>
      <button onClick={() => props.viewYourCards()}>Deal your cards</button>
      <button onClick={() => props.selectCards()}>Select your cards</button>
    </div>
  );
};

ActionsButtons.propTypes = {
  shuffle: PropTypes.func,
  viewYourCards: PropTypes.func,
  flip: PropTypes.func,
  deckArray: PropTypes.array,
  selectCards: PropTypes.func,
};

export default ActionsButtons;