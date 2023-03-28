import React, { useState } from "react";
import Card from "./Card";
import homework from "./videos/homework.mp4";
import reading from "./videos/reading.mp4";
import Form from "./Form";

const Entertainment = () => {
  const [isform, setIsform] = useState(false);
  const [cards, setCards] = useState([
    { name: "HomeWork", link: homework },
    { name: "Reading", link: reading },
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
      <button className="btn btn-warning" onClick={handleClick}>
        Add Card
      </button>
      {isform && <Form name="Card" />}
    </div>
  );
};

export default Entertainment;
