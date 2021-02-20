import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    top: 0,
  });

  const heanderListener = (event) => {
    switch (event.keyCode) {
      case 39:
        setBallPosition({
          left: ballPosition.left + 5,
          top: ballPosition.top,
        });
        break;
      case 40:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top + 5,
        });
        break;
      case 37:
        setBallPosition({
          left: ballPosition.left - 5,
          top: ballPosition.top,
        });
        break;
      case 38:
        setBallPosition({
          left: ballPosition.left,
          top: ballPosition.top - 5,
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const KeyListener = document.addEventListener("keydown", heanderListener);
    return () => document.removeEventListener("keydown", heanderListener);
  });
  const reset = () => {
    setRenderBall(false);
  };
  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const renderChoice = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute",
          }}
        ></div>
      );
    } else {
      return (
        <button id="start" className="start" onClick={buttonClickHandler}>
          start
        </button>
      );
    }
  };

  return (
    <div className="playground">
      <button id="reset" onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
