import React from "react";


function Table(props) {


  const drop = e => {
    e.preventDefault();
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

  return (
    <div 
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
      >
      { props.children }
    </div>
  )
}

export default Table
