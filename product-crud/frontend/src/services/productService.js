import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getProducts = () => axios.get(API_URL);
const getProduct = (id) => axios.get(`${API_URL}/${id}`);
const createProduct = (data) => axios.post(API_URL, data);
const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);
const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
