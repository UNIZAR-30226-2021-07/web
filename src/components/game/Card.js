import React from "react";
import { Card as CardBs, Image } from "react-bootstrap";

import cards from "../../assets/common/cards.json";

/**
 * @param  type Three types: hand, body, rival
 */
function Card({ id, number, type, draggable, className }) {
  const cardImage = process.env.PUBLIC_URL + "/" + cards[number].image;

  const drag = (e) => {
    if (draggable === false) {
      return;
    }

    console.log(id);
    e.dataTransfer.setData("card_id", id);
  };

  return (
    <CardBs
      id={id}
      className={`game-card mx-1 bg-dark ${className}`}
      draggable={draggable}
      onDragStart={drag}
    >
      <Image className={`${type}-card`} src={cardImage} />
    </CardBs>
  );
}

export default Card;
