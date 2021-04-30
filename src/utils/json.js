import cards from "../assets/common/cards.json";
import profile_pics from "../assets/common/profile_pics.json";

//Create card url
export function getCard({ type, color }) {
  console.log(type + color);
  return process.env.PUBLIC_URL + "/" + cards[1].image;
}

//Create profile url
export function getProfile(photo) {
  return process.env.PUBLIC_URL + "/" + profile_pics[photo].image;
}
