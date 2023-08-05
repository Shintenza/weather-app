import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import { openStMapApi } from './slices/cityNameSlice'
import { openMeteoApi } from './slices/weatherSlice'

const store = configureStore({
    reducer: {
        location: locationReducer,
        [openStMapApi.reducerPath]: openStMapApi.reducer,
        [openMeteoApi.reducerPath]: openMeteoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(openStMapApi.middleware).concat(openMeteoApi.middleware),
    devTools: true,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
