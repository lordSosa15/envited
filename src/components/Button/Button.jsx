import React from "react";
import { Link } from "react-router-dom";

const button = () => {
  return (
    <div>
      <Link to="/create">
        <button className="custom__button">🎉Create my event</button>
      </Link>
      <br />
    </div>
  );
};

export default button;
