import React from "react";
import { css } from "@emotion/react";

import type { Product } from "../types";

const containerStyle = css`
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 20px;
  border: 3px black solid;
  border-radius: 10px;

  box-shadow: 4px 4px 0px black;

  /* @keyframes slide-left {
    from {
      transform: translateX(500%);
    }
    to {
      transform: translateX(0%);
    }
  }
  animation: 0.5s slide-left; */

  transition: all 0.05s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: all 0.05s ease-in-out;
    transform: scale(105%);
  }
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
