import React from "react";
import { useGetSingleProductQuery } from "../../services/productAPI";
import Product from "../../components/Product";
import { css } from "@emotion/react";

const containerStyle = css`
  width: 18rem;
  height: 27rem;

  margin-top: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d9e0e0;
  border: 3px black solid;
  border-radius: 10px;

  box-shadow: 4px 4px 0px black;
`;

const spanStyle = css`
  display: flex;
  justify-content: center;
`;

export default function ModalProductDisplay(props: { productId: number }) {
  const { productId } = props;
  const { data, error, isLoading } = useGetSingleProductQuery(productId);

  return (
    <div css={containerStyle} onClick={(e) => e.stopPropagation()}>
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
        <div>
          <Product product={data.data} />
        </div>
      ) : null}
    </div>
  );
}
