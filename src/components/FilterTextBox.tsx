import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FilterTextBox(props: { itemTotal: number }) {
  const { itemTotal } = props;
  const [inputValue, setInputValue] = useState("1");

  function filterChars(textBoxValue: string) {
    if (/[0-9]/.test(textBoxValue.slice(-1)) || textBoxValue === "") {
      setInputValue(textBoxValue);
    }
  }

  function filterCharsOnPaste(textBoxValue: string) {
    if (/[0-9]/.test(textBoxValue)) {
      setInputValue(textBoxValue);
    }
  }

  return (
    <div>
      <input
        type={"text"}
        name={"Filter product ID"}
        placeholder={"Enter product ID"}
        value={inputValue}
        onChange={(e) => {
          filterChars(e.target.value);
        }}
        onPaste={(e) => {
          e.preventDefault();
          filterCharsOnPaste(e.clipboardData.getData("text"));
        }}
        min={1}
        max={itemTotal}
      />
      <Link to={`/product/${inputValue}`}>
        <button>Filter</button>
      </Link>
    </div>
  );
}
