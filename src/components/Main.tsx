import React from "react";
import "./Main.css";

const Main = () => {
  const arr = [
    ["j", "a", "z", "z", "y"],
    ["j", "a", "z", "z", "y"],
    ["j", "a", "z", "z", "y"],
    ["j", "a", "z", "z", "y"],
    ["j", "a", "z", "z", "y"],
  ];

  return (
    <div className="container">
      {arr.map((word) => {
        return (
          <div className="letter-div">
            {word.map((letter) => (
              <div className="box">
                <p className="letter-font">{letter}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Main;