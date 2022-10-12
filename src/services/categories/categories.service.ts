import axios from "axios";

const BASE_URL = 'https://api.mercadolibre.com/sites/MLA';

export const getAllCategories = async () => {
  const result = await axios.get(`${BASE_URL}/categories`)
  return result.data
}