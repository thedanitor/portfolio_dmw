import React from "react";

export default function AboutHeader() {
  const headerText = ["Hello World.. I'm Dan"];
  for (let i = 0; i < headerText.length; i++) {
    return <h1 className="headerText">{headerText[i]}</h1>;
  }
}
