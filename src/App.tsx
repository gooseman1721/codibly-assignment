import { useState } from "react";
import { css } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <h1
        css={css`
          color: red;
        `}
      >
        Product list
      </h1>
      <h5>Your number one source of products</h5>
    </div>
  );
}

export default App;
