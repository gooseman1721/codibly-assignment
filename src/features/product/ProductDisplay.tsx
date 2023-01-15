import React, { useEffect } from "react";
import { useGetProductPageQuery } from "../../services/productAPI";
import Product from "../../Product";
import { css } from "@emotion/react";

const containerStyle = css`
  width: 80vw;
  max-width: 25rem;
  height: 330px;
`;

export default function ProductDisplay(props: {
  pageNumber: number;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
  setItemTotal: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { pageNumber, setMaxPage, setItemTotal } = props;
  const { data, error, isLoading } = useGetProductPageQuery(pageNumber);

  useEffect(() => {
    if (!isLoading && data) {
      setMaxPage(data.total_pages);
    }
  }, [isLoading]);

  return (
    <div css={containerStyle}>
      {error ? (
        <span>Error!</span>
      ) : isLoading ? (
        <span>Loading...</span>
      ) : data ? (
        data.data.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : null}
    </div>
  );
}
