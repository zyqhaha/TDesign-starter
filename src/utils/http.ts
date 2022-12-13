import axios from 'axios';
const TIMEOUT = 5000;

export const instance = axios.create({
  baseURL: '/',
  timeout: TIMEOUT,
  withCredentials: true,
});


// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      return data
    }
    return Promise.reject(response?.data);
  },
  (e) => Promise.reject(e),
);

export default instance;