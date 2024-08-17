import axios from "axios";

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, params, headers, body }) => {
    const axiosInstance = createAxiosInstance(baseUrl);
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
