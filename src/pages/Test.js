import React, { useState } from "react";

export default function Test() {

  const [someText, setSomeText] = useState("Change me!")
  const changeText = (e) => {
      setSomeText(e.target.value);
  }

  return (
    <div>
      <input onChange={changeText}></input>
      <p>{someText}</p>
    </div>
  );
}
