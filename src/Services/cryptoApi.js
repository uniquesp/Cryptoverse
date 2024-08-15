import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapid-host' :  process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key' : process.env.REACT_APP_RAPIDAPI_KEY,
}

const baseURL =  process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({url , headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseURL }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : () => createRequest('/coins') 
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;