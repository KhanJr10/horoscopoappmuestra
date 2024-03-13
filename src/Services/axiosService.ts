import axios, {AxiosError} from 'axios';

const customAxiosInstance = axios.create({
  baseURL: 'https://artear.github.io/api-rn/',
  headers: {'Content-Type': 'application/json'},
});

customAxiosInstance.interceptors.response.use(
  axiosResponse => axiosResponse,
  (error: AxiosError) => {
    if (error.code === 'ERR_NETWORK') {
      return Promise.reject({Message: 'Ocurrió un error de red!'});
    }
    return Promise.reject(error);
  },
);

export {customAxiosInstance};
