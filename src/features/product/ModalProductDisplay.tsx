import React from "react";
import { useGetSingleProductQuery } from "../../services/productAPI";
import Product from "../../components/Product";
import { css } from "@emotion/react";
import ModalProduct from "../../components/ModalProduct";

const containerStyle = css`
  width: 18rem;
  height: max-content;
  min-height: 15rem;

  margin-top: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f8f8f8;
  border-radius: 5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const spanStyle = css`
  display: flex;
  justify-content: center;
`;

const productContainerStyle = css`
  width: 100%;
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
        <div css={productContainerStyle}>
          <ModalProduct product={data.data} />
        </div>
      ) : null}
    </div>
  );
}
