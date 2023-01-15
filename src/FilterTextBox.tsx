import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FilterTextBox(props: { itemTotal: number }) {
  const { itemTotal } = props;
  const [inputValue, setInputValue] = useState("1");

  return (
    <div>
      <input
        type={"number"}
        name={"Filter product ID"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        min={1}
        max={itemTotal}
      />
      <Link to={`/product/${inputValue}`}>
        <button>Filter</button>
      </Link>
    </div>
  );
}
