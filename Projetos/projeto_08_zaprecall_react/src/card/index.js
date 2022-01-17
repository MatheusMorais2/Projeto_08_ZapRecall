import "./style.css";
import React from "react";
import FaceUp from "../faceUp";
import FaceDown from "../faceDown";

export default function Card({
  card,
  questionNumber,
  deckLen,
  nextCard,
  face,
  turnCard,
  buttonHandler,
  showButtons,
  color,
}) {
  const { question, answer } = card;

  return face ? (
    <FaceUp
      question={question}
      questionNumber={questionNumber}
      deckLen={deckLen}
      turnCard={turnCard}
      color={color}
    />
  ) : (
    <FaceDown
      question={question}
      questionNumber={questionNumber}
      deckLen={deckLen}
      answer={answer}
      nextCard={nextCard}
      showButtons={showButtons}
      buttonHandler={buttonHandler}
      color={color}
    />
  );
}
