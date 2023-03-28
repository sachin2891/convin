import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Iframe from "./Iframe";
const Card = ({ name, link }) => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>{name}</h3>
        <button onClick={handleClick} className="btn btn-primary">
          {link}
        </button>
        {showIframe && <Iframe source={link} />}
      </div>
    </div>
  );
};

Card.defaultProps = {
  name: "Name",
  link: "",
};

export default Card;
