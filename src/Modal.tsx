import React from "react";
import { createPortal } from "react-dom";
import { Product } from "./types";
import { css } from "@emotion/react";
import ModalProductDisplay from "./features/product/ModalProductDisplay";

const modalContainerStyle = css`
  background-color: #8b7f7f68;
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0%;
  height: 100%;
  margin: 0 auto;

  z-index: 1000;
`;

export default function Modal(props: {
  productId: number;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { productId, setModalOpen } = props;

  return createPortal(
    <div css={modalContainerStyle} onClick={() => setModalOpen(false)}>
      <ModalProductDisplay productId={productId} />
    </div>,
    document.getElementById("portal") as Element
  );
}
