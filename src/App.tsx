import LeftPanel from './components/leftPanel/LeftPanel';
import RightPanel from './components/rightPanel/RightPanel';
import { useEffect } from 'react';
import { setLocation, setLocationAvailability } from './slices/locationSlice';
import { useGetLocationNameByCordsMutation } from './slices/cityNameSlice';
import { useAppDispatch, useAppSelector } from './hooks';

const App = () => {
    const [getCityName] = useGetLocationNameByCordsMutation();
    const dispatch = useAppDispatch();

    const { latitude, longitude, city } = useAppSelector(state => state.location);
    useEffect(() => {
        if (latitude != null && longitude != null && city != null) return;
        const fetchCityName = async () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    async position => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        try {
                            const data = await getCityName({
                                lat,
                                lon,
                            }).unwrap();
                            dispatch(
                                setLocation({
                                    latitude: lat,
                                    longitude: lon,
                                    city: data.address.town ? data.address.town : data.address.village,
                                    region: data.location.municipality ? data.location.municipality : data.location.county,
                                    country: data.address.country,
                                    isAvaliable: true,
                                    manuallyChanged: false,
                                })
                            );
                        } catch {
                            dispatch(setLocationAvailability(false));
                        }
                    },
                    () => {
                        dispatch(setLocationAvailability(false));
                    }
                );
            } else {
            }
        };
        fetchCityName();
    }, []);
    return (
        <div className="md:flex md:w-screen md:h-screen">
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default App;
