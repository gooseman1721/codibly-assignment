import { useState } from "react";
import { css } from "@emotion/react";
import GetProductPage from "./queries/GetProductPage";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="App">
      <h1
        css={css`
          color: red;
        `}
      >
        The product list
      </h1>
      <h5>Your #1 source of products</h5>
      <button onClick={() => handleClick()}>Fetch stuff</button>
      {clicked && <GetProductPage pageNumber={1} />}
    </div>
  );
}

export default App;
