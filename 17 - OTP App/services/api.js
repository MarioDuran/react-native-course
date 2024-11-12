import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server04-abyc.onrender.com', 
});

export default api;
