import React from "react";
import { useQuery } from "react-query";

type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

type EndpointResponse = {
  page: number;
  per_page: number;
  total_pages: number;
  data: Product[];
};

const APIurl = "https://reqres.in/api/products?per_page=5";

async function get_product_page(
  url: string = "",
  pageNumber: number
): Promise<EndpointResponse> {
  const response = await fetch(url + `&page=${pageNumber}`, {
    method: "GET",
    mode: "cors",
  });
  return response.json();
}

export default function GetProductPage(props: { pageNumber: number }) {
  const { pageNumber } = props;
  const { isLoading, isError, isSuccess, data, error } = useQuery<
    EndpointResponse,
    Error
  >([`get_product_page_${pageNumber}`], () =>
    get_product_page(APIurl, pageNumber)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return isSuccess ? <div>Endpoint response: {JSON.stringify(data)}</div> : <div></div>

  

}
