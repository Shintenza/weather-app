import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface LocationState {
    isAvaliable: boolean;
    latitude: number | null;
    longitude: number | null;
    city: string | null;
    country: string | null;
    region: string | null;
    manuallyChanged: boolean;
}

const initialState: LocationState = {
    isAvaliable: true,
    latitude: localStorage.getItem('lat') ? parseFloat(localStorage.getItem('lat')!) : null,
    longitude: localStorage.getItem("lon") ? parseFloat(localStorage.getItem('lon')!) : null,
    city: localStorage.getItem('city') ? localStorage.getItem('city') : null,
    country: localStorage.getItem('country') ? localStorage.getItem('country') : null,
    region: localStorage.getItem('region') ? localStorage.getItem('region') : null,
    manuallyChanged: false,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            localStorage.setItem('lat', action.payload.latitude!.toString());
            localStorage.setItem('lon', action.payload.longitude!.toString());
            localStorage.setItem('city', action.payload.city!);
            localStorage.setItem('country', action.payload.country!);
            localStorage.setItem('region', action.payload.region!);
            state.longitude = action.payload.longitude;
            state.latitude = action.payload.latitude;
            state.city = action.payload.city;
            state.isAvaliable = action.payload.isAvaliable;
            state.country = action.payload.country;
            state.region = action.payload.region;
        },
        setLocationAvailability: (state, action: PayloadAction<boolean>) => {
            state.isAvaliable = action.payload;
        },
    },
});

export const { setLocation, setLocationAvailability } = locationSlice.actions;
export default locationSlice.reducer;
