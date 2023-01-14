import React from "react";
import { css } from "@emotion/react";

import type { Product } from "./types";

const containerStyle = css`
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 2vh;
  margin-bottom: 20px;

  box-shadow: 7px 7px 0px black;
`;


export default function Product(props: { product: Product }) {
  const { product } = props;
  return (
    <div css={css`
        ${containerStyle}
        background-color: ${product.color};
    `}>
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.year}</div>
    </div>
  );
}
