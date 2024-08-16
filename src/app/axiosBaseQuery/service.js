import axios from "axios";

const axiosInstance = axios.create({
    baseURL:  process.env.REACT_APP_CRYPTO_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params, headers, body }) => {
    try {
      const result = await axiosInstance({
        url: url,
        method,
        data,
        params,
        headers,
        body,
      });
      return Promise.resolve(result);
    } catch (axiosError) {
      return Promise.reject(axiosError?.response?.data);
    }
  };

export default axiosBaseQuery;