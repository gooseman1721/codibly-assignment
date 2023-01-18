import React from "react";
import { useGetSingleProductQuery } from "../../services/productAPI";
import Product from "../../components/Product";
import { css } from "@emotion/react";

const containerStyle = css`
  width: 80vw;
  max-width: 25rem;
  height: 18rem;
`;

const spanStyle = css`
  display: flex;
  justify-content: center;
`;

export default function SingleProductDisplay(props: {
  productId: number;
  onProductClick: (productId: number) => void;
}) {
  const { productId, onProductClick } = props;
  const { data, error, isLoading } = useGetSingleProductQuery(productId);

  return (
    <div css={containerStyle}>
      {error ? (
        <span css={spanStyle}>
          Error{" "}
          {"data" in error
            ? error.status === 404
              ? `404: No product with this ID: ${productId}`
              : JSON.stringify(error.status)
            : null}
        </span>
      ) : isLoading ? (
        <span css={spanStyle}>Loading...</span>
      ) : data ? (
        <div onClick={() => onProductClick(productId)}>
          <Product product={data.data} />
        </div>
      ) : null}
    </div>
  );
}
