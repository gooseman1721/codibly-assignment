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

export type { Product, EndpointResponse };
