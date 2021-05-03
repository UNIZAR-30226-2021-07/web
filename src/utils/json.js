import cards from "../assets/common/cards.json";
import profile_pics from "../assets/common/profile_pics.json";

// Create card url
export function getCard(card) {
  let carta = cards.find(
    (elto) =>
      elto.type == card.card_type &&
      (elto.color == card.color || elto.treatment_type == card.treatment_type)
  );
  return process.env.PUBLIC_URL + "/" + carta.image;
}

//Create profile url
export function getProfile(photo) {
  return process.env.PUBLIC_URL + "/" + profile_pics[photo].image;
}
