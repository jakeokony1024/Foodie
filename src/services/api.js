import { Config } from '../Config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseQueryWithInterceptor = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)
//     if (result.error && result.error.status === 401) {
//         // here you can deal with 401 error
//     }
//     return result
// }

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: Config.API_URL,
        prepareHeaders: (headers, { getState }) => {
           // headers.set('authorization', `Bearer ${token}`)

            return headers
        },
    }),
    endpoints: () => ({}),
})