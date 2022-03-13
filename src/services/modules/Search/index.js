import { api } from '../../api'
import autoSearchPreview from "./autoSearchPreview";

export const searchApi = api.injectEndpoints({
    endpoints: build => ({
        autoSearchPreview: autoSearchPreview(build),
    }),
    overrideExisting: false,
})

export const { useLazyFetchOneQuery } = searchApi