import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GeoData } from '../types'


export const openStMapApi = createApi({
    reducerPath: 'openStMapApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://nominatim.openstreetmap.org/',
    }),
    endpoints: (builder) => ({
        getLocationNameByCords: builder.mutation({
            query: (data: GeoData) =>
                `reverse?format=jsonv2&lat=${data.lat}&lon=${data.lon}`,
        }),
        getLocationInfoByName: builder.mutation({
            query: (data: string) =>
                `search?q=${data}&format=json`
        })
    }),
})

export const { useGetLocationNameByCordsMutation, useGetLocationInfoByNameMutation } = openStMapApi
