type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

type ProductEndpointResponse = {
  data: Product;
};

type PageEndpointResponse = {
  data: Product[];
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
};

export type { Product, PageEndpointResponse, ProductEndpointResponse };
