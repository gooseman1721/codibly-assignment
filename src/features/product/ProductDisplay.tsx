import React, { useEffect } from "react";
import { useGetProductPageQuery } from "../../services/productAPI";
import Product from "../../components/Product";
import { css } from "@emotion/react";

const containerStyle = css`
  width: 80vw;
  max-width: 25rem;
  height: 330px;
`;

export default function ProductDisplay(props: {
  pageNumber: number;
  setMaxPage: React.Dispatch<React.SetStateAction<number>>;
  onProductClick: (productId: number) => void;
}) {
  const { pageNumber, setMaxPage, onProductClick } = props;
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
          <div key={product.id} onClick={() => onProductClick(product.id)}>
            <Product product={product} />
          </div>
        ))
      ) : null}
    </div>
  );
}
