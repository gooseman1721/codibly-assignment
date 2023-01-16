import React from "react";
import { useGetSingleProductQuery } from "../../services/productAPI";
import Product from "../../Product";
import { css } from "@emotion/react";

const containerStyle = css`
  width: 80vw;
  max-width: 25rem;
`;

const spanStyle = css`
  display: flex;
  justify-content: center;
`;

export default function ModalProductDisplay(props: { productId: number }) {
  const { productId } = props;
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
        <Product product={data.data} />
      ) : null}
    </div>
  );
}