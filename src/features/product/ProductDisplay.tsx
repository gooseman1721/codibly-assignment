import React, { useEffect } from "react";
import { useGetProductPageQuery } from "../../services/productAPI";
import Product from "../../components/Product";
import { css } from "@emotion/react";

const containerStyle = css`
  width: 80vw;
  max-width: 25rem;
  height: 350px;
`;

const spanStyle = css`
  display: flex;
  justify-content: center;
`;

export default function ProductDisplay(props: {
  pageNumber: number;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
  onProductClick: (productId: number) => void;
}) {
  const { pageNumber, setMaxPage, onProductClick } = props;
  const { data, error, isLoading } = useGetProductPageQuery(pageNumber);

  useEffect(() => {
    if (!isLoading && data) {
      setMaxPage(data.total_pages);
    }
  }, [isLoading]);

  return (
    <div css={containerStyle}>
      {error ? (
        <span css={spanStyle}>
          Error{" "}
          {"data" in error
            ? error.status === 404
              ? `404: No such product page: ${pageNumber}`
              : JSON.stringify(error.status)
            : null}
        </span>
      ) : isLoading ? (
        <span css={spanStyle}>Loading...</span>
      ) : data ? (
        data.data.length ? (
          data.data.map((product) => (
            <div key={product.id} onClick={() => onProductClick(product.id)}>
              <Product product={product} />
            </div>
          ))
        ) : (
          <span css={spanStyle}>No data for page {pageNumber}</span>
        )
      ) : null}
    </div>
  );
}
