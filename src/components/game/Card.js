import React from "react";
import { Card as CardBs, Image } from "react-bootstrap";

import { getCard } from "../../utils/json";

/**
 * @param  type Three types: hand, body, rival
 */
function Card({ id, card, slot, kind, className }) {
  const cardImg = getCard(card);
  
  const drag = (e) => {
    // Only allow to move hand cards
    if (slot == 0|| slot == 1 || slot == 2) {
      e.dataTransfer.setData("slot", slot);
      e.dataTransfer.setData("treatment", card.treatment_type);
    }
  };

  return (
    <CardBs
      id={id}
      className={`game-card mx-1 bg-dark ${className}`}
      onDragStart={drag}
    >
      <Image id={`${id}-img`} className={`${kind}-card`} src={cardImg} />
    </CardBs>
  );
}

export default Card;
