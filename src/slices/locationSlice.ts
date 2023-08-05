import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LocationState {
    isAvaliable: boolean;
    latitude: number | null;
    longitude: number | null;
    city: string | null;
    manuallyChanged: boolean;
}

const initialState: LocationState = {
    isAvaliable: true,
    latitude: localStorage.getItem('lat') ? parseFloat(localStorage.getItem('lat')!) : null,
    longitude: localStorage.getItem("lon") ? parseFloat(localStorage.getItem('lon')!) : null,
    city: localStorage.getItem('city') ? localStorage.getItem('city') : null,
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
            state.longitude = action.payload.longitude;
            state.latitude = action.payload.latitude;
            state.city = action.payload.city;
            state.isAvaliable = action.payload.isAvaliable;
        },
        setLocationAvailability: (state, action: PayloadAction<boolean>) => {
            state.isAvaliable = action.payload;
        },
    },
});

export const { setLocation, setLocationAvailability } = locationSlice.actions;
export default locationSlice.reducer;
