// todos los productos

import axios from "axios";

export const getProducts = async () => {
  let res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

// un producto
export const getProductById = async (id) => {
  let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

// crear un product
// modifiar un product
