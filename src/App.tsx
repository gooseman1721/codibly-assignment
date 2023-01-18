import { useEffect, useState } from "react";
import { css, Global } from "@emotion/react";

import { useParams, Link } from "react-router-dom";
import ProductDisplay from "./features/product/ProductDisplay";
import FilterTextBox from "./components/FilterTextBox";
import SingleProductDisplay from "./features/product/SingleProductDisplay";
import Modal from "./components/Modal";

const globalStyles = css`
  .everything {
    font-family: "Roboto";
  }
`;

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
  font-weight: 900;
`;
const navStyle = css`
  display: flex;
  margin-top: 3rem;
  gap: 20px;
`;

const navButtonStyle = css`
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border: 0px;
  background-color: white;
  transition: scale 0.05s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: scale 0.05s ease-in-out;
    transform: scale(115%);
  }
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
      <Global styles={globalStyles} />
      <div css={containerStyle} className="everything">
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
            <button className="material-symbols-outlined" css={navButtonStyle}>
              arrow_back
            </button>
          </Link>
          <Link to={`/page/${nextPage}`}>
            <button className="material-symbols-outlined" css={navButtonStyle}>
              arrow_forward
            </button>
          </Link>
        </nav>
      </div>
      <div>
        {modalOpen && (
          <Modal productId={clickedProduct} setModalOpen={setModalOpen} />
        )}
      </div>
    </>
  );
}

export default App;
