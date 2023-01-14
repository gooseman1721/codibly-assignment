import { useState } from "react";
import { css } from "@emotion/react";

import { useParams, Link } from "react-router-dom";
import ProductDisplay from "./features/product/ProductDisplay";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const h1Style = css`
  color: red;
`;
const navStyle = css`
  margin-top: auto;
`;

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
    <div css={containerStyle}>
      <h1 css={h1Style}>The product list</h1>
      <h5>Your #1 source of products</h5>
      <button onClick={() => handleClick()}>Fetch stuff</button>
      <ProductDisplay
        pageNumber={parseInt(pageNumber)}
        setMaxPage={setMaxPage}
      />
      <nav css={navStyle}>
        <Link to={`/page/${previousPage}`}>
          <button> &lt; </button>
        </Link>
        <Link to={`/page/${nextPage}`}>
          <button> &gt; </button>
        </Link>
      </nav>
    </div>
  );
}

export default App;
