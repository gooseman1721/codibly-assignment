import React, { useEffect } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "./productSlice";
import { useGetProductPageQuery } from "../../services/productAPI";

export default function ProductDisplay(props: {
  pageNumber: number;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { pageNumber, setMaxPage } = props;
  const products = useSelector((state: RootState) => state.product.productData);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetProductPageQuery(pageNumber);

  useEffect(() => {
    if (!isLoading && data) {
      setMaxPage(data.total_pages);
    }
  }, [isLoading]);


  return (
    <div>
      {error ? (
        <span>Error!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : data ? (
        <div>{JSON.stringify(data.data)}</div>
      ) : null}
    </div>
  );
}
