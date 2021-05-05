import React from "react";
import { Card as CardBs, Image } from "react-bootstrap";

import { getCard } from "../../utils/json";

/**
 * @param  type Three types: hand, body, rival
 */
function Card({ id, card, slot, kind, className }) {
  let cardImg;

  if (card != null) {
    cardImg = getCard(card);
  }

  const drag = (e) => {
    // Only allow to move hand cards
    if (slot == 0 || slot == 1 || slot == 2) {
      e.dataTransfer.setData("slot", slot);
      e.dataTransfer.setData("treatment_type", card.treatment_type);
    }
  };

  return card != null ? (
    <CardBs
      id={id}
      className={`game-card mx-1 bg-dark ${className}`}
      onDragStart={drag}
    >
      <Image id={`${id}-img`} className={`${kind}-card`} src={cardImg} />
    </CardBs>
  ) : (
    <CardBs
      id={id}
      className={`game-card mx-1 bg-transparent border-secondary ${kind}-card`}
      onDragStart={drag}
    />
  );
}

export default Card;
