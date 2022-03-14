import { api } from '../../api'
import autoSearchPreview from "./autoSearchPreview";

export const searchApi = api.injectEndpoints({
    endpoints: (build) => ({
        autoSearchPreview: build.query({
            query: (queryString) => `/search-preview/${queryString}`,
        }),
    }),
    overrideExisting: false,
})

export const { useAutoSearchPreviewQuery } = searchApi