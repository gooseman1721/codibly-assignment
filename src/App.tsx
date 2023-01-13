import { useState } from "react";
import { css } from "@emotion/react";

import { useParams, Link } from "react-router-dom";
import ProductDisplay from "./features/product/ProductDisplay";

type Params = {
  pageNumber: string;
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [maxPage, setMaxPage] = useState(1);

  const { pageNumber } = useParams<Params>() as Params;

  const previousPage =
    parseInt(pageNumber) === 1 ? 1 : parseInt(pageNumber) - 1;
  const nextPage =
    parseInt(pageNumber) === maxPage ? maxPage : parseInt(pageNumber) + 1;

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
      <Link to={`/page/${previousPage}`}>
        <button>Previous</button>
      </Link>
      <Link to={`/page/${nextPage}`}>
        <button>Next</button>
      </Link>
      {clicked && (
        <ProductDisplay
          pageNumber={parseInt(pageNumber)}
          setMaxPage={setMaxPage}
        />
      )}
    </div>
  );
}

export default App;
