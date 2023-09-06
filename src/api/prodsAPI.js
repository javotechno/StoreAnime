import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/products`,
});

const getProds = async () => {
  const response = await api.get("/");
  return response.data;
};

const getProd = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

const prodsAPI = { getProds, getProd };

export default prodsAPI;
