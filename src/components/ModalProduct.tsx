import React from "react";
import { css } from "@emotion/react";

import type { Product } from "../types";

const containerStyle = css`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 20px;
  border-radius: 5px;
  //box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const dividerStyle = css`
  border-top: 2px solid #bbb;
  width: 100%;
`;

const rowStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const attributeNameStyle = css`
    font-weight: 700;
`

export default function ModalProduct(props: { product: Product }) {
  const { product } = props;
  return (
    <div
      css={css`
        ${containerStyle}
      `}
    >
      <div css={rowStyle}>
        <div css={attributeNameStyle}>ID</div>
        <div>{product.id}</div>
      </div>
      <hr css={dividerStyle} />
      <div css={rowStyle}>
        <div css={attributeNameStyle}>Name</div>
        <div>{product.name}</div>
      </div>
      <hr css={dividerStyle} />
      <div css={rowStyle}>
        <div css={attributeNameStyle}>Year</div>
        <div>{product.year}</div>
      </div>
      <hr css={dividerStyle} />
      <div css={rowStyle}>
        <div css={attributeNameStyle}>Color</div>
        <div
          css={css`
            &:hover {
              background-color: ${product.color};
            }
          `}
        >
          {product.color}
        </div>
      </div>
      <hr css={dividerStyle} />
      <div css={rowStyle}>
        <div css={attributeNameStyle}>Pantone value</div>
        <div>{product.pantone_value}</div>
      </div>
      <hr css={dividerStyle} />
    </div>
  );
}
