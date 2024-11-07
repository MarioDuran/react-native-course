import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from './tokenService';

const api = axios.create({
  baseURL: 'https://server03-s0cc.onrender.com', 
});

/*
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
*/

api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    console.log("interceptor 1")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("adding token", token)
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
*/

/*

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 

      try {
        const refreshToken = await getRefreshToken();
        if (!refreshToken) {
          return Promise.reject(error);
        }

        const refreshResponse = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          { refreshToken: refreshToken }
        );

        const newAccessToken = refreshResponse.data.accessToken;
        await setAccessToken(newAccessToken); 

        const newRefreshToken = refreshResponse.data.refreshToken;
        await setRefreshToken(newRefreshToken); 

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

*/

export default api;
