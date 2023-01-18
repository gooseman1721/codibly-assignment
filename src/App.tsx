import { useEffect, useState } from "react";
import { css } from "@emotion/react";

import { useParams, Link } from "react-router-dom";
import ProductDisplay from "./features/product/ProductDisplay";
import FilterTextBox from "./components/FilterTextBox";
import SingleProductDisplay from "./features/product/SingleProductDisplay";
import Modal from "./components/Modal";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 25rem;
`;

const mainStyle = css`
  border: dotted 0px black;
  height: auto;
`;

const h1Style = css`
  color: red;
`;
const navStyle = css`
  margin-top: 2.5rem;
`;

type Params = {
  pageNumber?: string;
  productId?: string;
};

function App() {
  const [maxPage, setMaxPage] = useState(1);
  const [itemTotal, setItemTotal] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedProduct, setClickedProduct] = useState(0);

  const { pageNumber, productId } = useParams<Params>() as Params;

  const previousPage = !pageNumber
    ? 1
    : parseInt(pageNumber) === 1 || parseInt(pageNumber) > maxPage
    ? 1
    : parseInt(pageNumber) - 1;
  const nextPage = !pageNumber
    ? 1
    : parseInt(pageNumber) >= maxPage
    ? maxPage
    : parseInt(pageNumber) + 1;

  useEffect(() => {
    console.log(clickedProduct);
  }, [clickedProduct]);

  function onProductClick(productId: number) {
    setModalOpen(true);
    setClickedProduct(productId);
  }

  return (
    <>
      <div css={containerStyle}>
        <h1 css={h1Style}>The product list</h1>
        <h5>Your #1 source of products</h5>
        <FilterTextBox itemTotal={itemTotal} />
        <main css={mainStyle}>
          {pageNumber && (
            <ProductDisplay
              pageNumber={parseInt(pageNumber)}
              setMaxPage={setMaxPage}
              onProductClick={onProductClick}
            />
          )}
          {productId && (
            <SingleProductDisplay
              productId={parseInt(productId)}
              onProductClick={onProductClick}
            />
          )}
        </main>

        <nav css={navStyle}>
          <Link to={`/page/${previousPage}`}>
            <button> &lt; </button>
          </Link>
          <Link to={`/page/${nextPage}`}>
            <button> &gt; </button>
          </Link>
        </nav>
      </div>
      {modalOpen && (
        <Modal productId={clickedProduct} setModalOpen={setModalOpen} />
      )}
    </>
  );
}

export default App;
