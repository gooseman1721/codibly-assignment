import React from "react";
import { css } from "@emotion/react";

import type { Product } from "../types";

const containerStyle = css`
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
    <div
      css={css`
        ${containerStyle}
        background-color: ${product.color};
      `}
    >
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.year}</div>
    </div>
  );
}
