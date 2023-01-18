import { css } from "@emotion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const containerStyle = css`
  display: flex;
  width: 100%;
  //gap: 40px;
  justify-content: space-between;
  padding: 0.5rem;
`;

const inputStyle = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 0px;
`;

const filterButtonStyle = css`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 0px;
  background-color: white;

  transition: all 0.05s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: all 0.05s ease-in-out;
    transform: scale(115%);
  }
`;

const filterButtonInactive = css`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 0px;
  background-color: white;

  
`;

export default function FilterTextBox(props: { itemTotal: number }) {
  const { itemTotal } = props;
  const [inputValue, setInputValue] = useState("");

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
    <div css={containerStyle}>
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
        css={inputStyle}
      />

      {inputValue !== "" ? (
        <Link to={`/product/${inputValue}`}>
          <button css={filterButtonStyle}>Filter</button>
        </Link>
      ) : (
        <button css={filterButtonInactive}>Filter</button>
      )}
    </div>
  );
}
