import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import Form from "./Form";

function Homepage() {
  const [isform, setIsform] = useState(false);
  const handleClick = () => {
    setIsform(!isform);
  };
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid text-warning font-weight-bold inline">
          Your Play. History
        </div>
      </nav>
      <p className="Links">
        <Link to="/entertainmentvideos">Entertainment Videos</Link>
      </p>
      <p className="Links">
        <Link to="/educationvideos">Education Videos</Link>
      </p>

      <button className="btn btn-warning" onClick={handleClick}>
        Add Bucket
      </button>

      {isform && <Form name="Bucket" />}
    </div>
  );
}

export default Homepage;
