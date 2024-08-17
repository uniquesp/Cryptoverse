import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../app/axiosBaseQuery/service";

const cryptoNewsHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
};

const createRequest = (url, params) => ({
  url,
  headers: cryptoNewsHeaders,
  params,
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ page = 1, count = 10 }) =>
        createRequest(`/v2/search/articles`, {
          language: 'en',
          query: 'cryptocurrency',
          page,
          size: count,
        }),
    }),
  }),
});

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;
