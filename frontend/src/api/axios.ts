import axios from "axios";

console.log(process.env.REACT_APP_PUBLIC_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_BASE_URL,
});

export default axiosInstance;
