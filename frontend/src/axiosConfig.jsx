import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001', // local
  //baseURL: 'http://13.238.217.54', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
