import axios from "axios";

export const getProductDetail = (productID: string | undefined) => {
    const res = axios.get(`https://api.mercadolibre.com/items?ids=${productID}`)
    .then((response) => {
      return response?.data[0].body;
    })
    .catch((error) => {
      return error;
    })
    return res;
}