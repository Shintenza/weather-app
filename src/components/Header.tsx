import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useGetLocationInfoByNameMutation } from '../slices/cityNameSlice';
import { setLocation } from '../slices/locationSlice';

const Header = () => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const dayString = today.toLocaleString('default', { weekday: 'long' });
    const dayNumber = today.getDate();

    const { isAvaliable, city } = useAppSelector(state => state.location);

    const [getLocationData] = useGetLocationInfoByNameMutation();
    const dispatch = useAppDispatch();

    const [location, setLocationState] = useState('');

    const handleLocationSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!location) {
            return;
        }
        // TODO make it safe
        try {
            let fetchedData: Array<any> | undefined = await getLocationData(location).unwrap();
            if (!fetchedData || fetchedData.length === 0) {
                console.log('data is missing');
                return;
            }
            const data = fetchedData[0];
            dispatch(
                setLocation({
                    latitude: data.lat,
                    longitude: data.lon,
                    city: data.display_name.split(',')[0],
                    isAvaliable: true,
                    manuallyChanged: true
                })
            );
        } catch (error) {
            console.log('chuj');
        }

        setLocationState('');
    };

    return (
        <nav className="container mx-auto pt-4 pb-10 sm:flex justify-between border-b-2 border-gray-100">
            <div className="flex flex-col pb-5 sm:pb-0">
                <h2 className="text-2xl font-bold">
                    {month} {year} {isAvaliable ? city : 'Location not avaliable, use manual search'}
                </h2>
                <p className="">
                    {dayString}, {dayNumber} {month} {year}
                </p>
            </div>
            <div className="flex items-center">
                <form onSubmit={handleLocationSubmit}>
                    <input
                        type="text"
                        id="location"
                        placeholder="Search your location"
                        value={location}
                        className="bg-gray-100 w-full px-4 rounded-full py-4 focus:outline-none"
                        onChange={e => setLocationState(e.target.value)}
                    />
                </form>
            </div>
        </nav>
    );
};

export default Header;
