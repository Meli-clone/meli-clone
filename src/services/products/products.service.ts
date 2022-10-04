import axios from "axios"

const BASE_URL = 'https://api.mercadolibre.com/sites/MLA'

export const getProductsByQuery = async (query: string | undefined) => {
  const result = await axios.get(`${BASE_URL}/search${query}`)

  return result.data
}

// export const getProductsByQuery = async (query: string) => {
//   const config = {
//     method: 'get',
//     url: 'https://api.mercadolibre.com/sites/MLA/search?q=El señor de los anillos',
//     headers: { }
//   }

//   const result = await axios(config)
//   console.log({result})
//   return result.data
// }