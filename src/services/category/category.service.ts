import axios from "axios";

const BASE_URL = 'https://api.mercadolibre.com/sites/MLA';

export const getCategory = async (category: string) => {
  const result = await axios.get(`${BASE_URL}/search?category=${category}`)
  return result
}
/* MLA1051 */