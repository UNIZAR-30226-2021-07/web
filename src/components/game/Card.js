import React from "react";
import { Card as CardBs, Image } from "react-bootstrap";

import cards from "../../assets/common/cards.json";

/**
 * @param  type Three types: hand, body, rival
 */
function Card({ number, type }) {
    const card = process.env.PUBLIC_URL + "/" + cards[number].image;

  return (
    <CardBs className="game-card mx-1 bg-dark">
      <Image className={`${type}-card`} src={card} />
    </CardBs>
  );
}

export default Card;
