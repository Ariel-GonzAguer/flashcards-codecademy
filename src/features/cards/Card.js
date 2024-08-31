import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { cardsSelectorById } from "../../features/cards/cardsSlice";
import { otherCardsSelector } from "../../features/cards/cardsSlice";

export default function Card({ id }) {
  const card = useSelector(cardsSelectorById(id)); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  const cardsState = useSelector(otherCardsSelector);
  console.log("card:", card);
  console.log(cardsState[id]);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
