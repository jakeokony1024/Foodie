import { api } from '../../api'
import getUserDataFromId from "./getUserDataFromId";

export const userApi = api.injectEndpoints({
    endpoints: build => ({
        getUserDataFromId: getUserDataFromId(build),
    }),
    overrideExisting: false,
})

export const { useLazyFetchOneQuery } = userApi