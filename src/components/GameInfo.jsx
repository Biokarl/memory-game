import React from "react";

export const GameInfo = ({ matchedCards, onReset }) => {
  return (
    <div className="game-info">
      <div className="info">Matched Pairs: {matchedCards.length / 2}</div>
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
};
