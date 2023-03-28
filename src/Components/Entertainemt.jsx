import React, { useState } from "react";
import Card from "./Card";
import bonfire from "./videos/bonfire.mp4";
import flowers from "./videos/flowers.mp4";
import Form from "./Form";

const Entertainment = () => {
  const [isform, setIsform] = useState(false);
  const [cards, setCards] = useState([
    { name: "Bonfire", link: bonfire },
    { name: "Flowers", link: flowers },
  ]);
  const handleClick = () => {
    setIsform(!isform);
  };

  return (
    <div>
      <div>
        {cards.map((card, index) => (
          <Card key={index} name={card.name} link={card.link} />
        ))}
      </div>
      <br />
      <button className="btn btn-warning" onClick={handleClick}>
        Add Card
      </button>
      {isform && <Form name="Card" />}
    </div>
  );
};

export default Entertainment;
