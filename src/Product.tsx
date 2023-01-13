import React from "react";
import type { Product } from "./types";

export default function Product(props: { product: Product }) {
  const { product } = props;
  return (
    <div>
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.year}</div>
    </div>
  );
}
