import axios from "axios";

export const getProductDetail = (itemId: string) => {
    const res = axios.get(`https://api.mercadolibre.com/items?ids=${itemId}`)
    .then((response) => {
      return response.data[0].body;
    })
    .catch((error) => {
      return error;
    })
    return res;
}