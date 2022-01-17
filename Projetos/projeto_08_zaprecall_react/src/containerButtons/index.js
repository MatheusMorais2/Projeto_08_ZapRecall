import React from "react";
import "./style.css";

export default function ContainerButtons({
  nextCard,
  showButtons,
  buttonHandler,
}) {
  const buttons = [
    { txt: `Aprendi agora`, color: "#000000" },
    { txt: `Não lembrei`, color: "#F64848" },
    { txt: `Lembrei com esforço`, color: "#62DB38" },
    { txt: `Zap!`, color: "#FFEF61" },
  ];

  if (!showButtons) {
    return (
      <div className="buttons">
        {buttons.map((elem) => (
          <button
            onClick={buttonHandler}
            style={{ border: `3px solid ${elem.color}`, borderRadius: "12px" }}
          >
            <span>{elem.txt}</span>
          </button>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <div></div>
        <ion-icon
          data-identifier="arrow"
          onClick={(e) => nextCard(e)}
          name="arrow-undo"
        ></ion-icon>
      </>
    );
  }
}
