import cards from "../assets/common/cards.json";

export function getCard({type, color}) {
    console.log(type + color);
    return process.env.PUBLIC_URL + "/" + cards[1].image
}