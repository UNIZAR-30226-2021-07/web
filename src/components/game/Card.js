import React from "react";
import { Card as CardBs, Image } from "react-bootstrap";

import cards from "../../assets/common/cards.json";

/**
 * @param  type Three types: hand, body, rival
 */
function Card({ id, number, type, draggable }) {
  const cardImage = process.env.PUBLIC_URL + "/" + cards[number].image;

  const dragStart = e => {
    //const target = e.target;

    //console.log(e.target);

    e.dataTransfer.setData('card_id', id);

    console.log(id);
    /*
    setTimeout(() => {
        target.style.display = "none";
    }, 0);
    */
  }

  const dragOver = e => {
      e.stopPropagation();
  }

  return (
    // TODO: Sólo si el type es hand mejor?
    <CardBs id={id}
            className="game-card mx-1 bg-dark"
            draggable={draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
    >
      <Image className={`${type}-card`} src={cardImage} />
    </CardBs>
  );
}

export default Card;
