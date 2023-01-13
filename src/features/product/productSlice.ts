import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types";

export interface ProductState {
  productData: Product[];
  maxPage: number;
}

const initialState: ProductState = {
  productData: [],
  maxPage: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      action.payload.map((product) => {
        if (state.productData.findIndex((x) => x.id === product.id) === -1) {
          state.productData.push(product);
        }
      });
    },
    setMaxPage: (state, action: PayloadAction<number>) => {
      state.maxPage = action.payload;
    },
  },
});

export const { addProducts, setMaxPage } = productSlice.actions;

export default productSlice.reducer;
