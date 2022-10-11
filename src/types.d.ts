export interface Product {
  id: string;
  title: string;
  original_price: number;
  price: number;
  thumbnail: string;
  seller: {
    eshop: {
      nick_name: string;
    };
  };
  prices: {
    purchase_discounts: Array<{
      discount_percentage: number;
    }>;
  };
  shipping: {
    free_shipping: boolean;
    logistic_type: 'fulfillment' | 'xd_drop_off';
  };
  tags: Array<string>;
}

export interface FilterOption {
    id: string;
    name: string;
    values: Array<{
      id: string;
      name: string;
      results: number;
    }>
}

export interface SearchedProducts {
  sort: {
    id: string;
    name: string;
  };
  available_sorts: Array<{
    id: string;
    name: string;
  }>;
  results: Array<Product>;
  paging: {
    total: number;
  };
  filters: Array<FilterOption>;
}