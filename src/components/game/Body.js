import React from "react";

import CardStack from "./CardStack";

/**
 * @param cardStacks -> son las pilas de cartas posibles en el cuerpo
 * Entre 0 y 4 pilas
 */
function Body({id, cardStacks }) {

  /*
  const drop = e => {
    e.preventDefault();

    console.log(id);
    // Obtain card_id of card in event e
    const card_id = e.dataTransfer.getData('card_id');

    // Obtain card element with the id
    const card = document.getElementById(card_id);
    card.style.display = 'block';

    // To set the card in other place
    e.target.appendChild(card);
  }

  const dragOver = e => {
    e.preventDefault();
  }
  */

  return (
    <div
      id={id}>
      {cardStacks.map((cards, idx) => (
          <CardStack id={`body-${id}-cs-${idx}`} key={idx} cards={cards} />
      ))}
    </div>
  );
}

export default Body;
