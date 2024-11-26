import axios from 'axios';

const DUMMY_JSON_BASE_URL = 'https://dummyjson.com';

const fetchAllProducts = async () => {
  const response = await axios.get(`https://dummyjson.com/products`, {
    params: { limit: 12 },
  });
  return response.data;
};

const fetchProductById = async (productId: string) => {
  const response = await axios.get(
    `${DUMMY_JSON_BASE_URL}/products/${productId}`,
  );
  return response.data;
};

export const ProductService = {
  fetchAllProducts,
  fetchProductById,
};
