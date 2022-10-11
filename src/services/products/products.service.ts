import axios from 'axios';

const BASE_URL = 'https://api.mercadolibre.com/sites/MLA';

export const getProductsByQuery = async (query: string | undefined) => {
  const result = await axios.get(`${BASE_URL}/search${query}`);

  return result.data;
};
