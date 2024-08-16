import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../app/axiosBaseQuery/service";

const cryptoApiHeaders = {
    'x-rapid-host' :  process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key' : process.env.REACT_APP_RAPIDAPI_KEY,
}

const createRequest = (url) => ({url , headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : axiosBaseQuery(),
    endpoints : (builder) => ({

         // get cryptocurrencies
        getCryptos: builder.query({
        query: (count) => createRequest(`/coins`),
    }),
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;