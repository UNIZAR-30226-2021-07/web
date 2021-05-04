import cards from "../assets/common/cards.json";
import profile_pics from "../assets/common/profile_pics.json";

function searchCard(elem, card) {
  if (card.color) {
    return elem.type == card.card_type && elem.color == card.color;
  } else {
    return (
      elem.type == card.card_type && elem.treatment_type == card.treatment_type
    );
  }
}

// Create card url
export function getCard(card) {
  let carta = cards.find((elem) => searchCard(elem, card));
  
  /* ! Temporal hasta que servidor devuelva el tipo de tratamiento */
  if (carta === undefined) {
    console.log("arreglo");
    return process.env.PUBLIC_URL + "/cards/especial_operacion.svg";
  }

  return process.env.PUBLIC_URL + "/" + carta.image;
}

//Create profile url
export function getProfile(photo) {
  return process.env.PUBLIC_URL + "/" + profile_pics[photo].image;
}
