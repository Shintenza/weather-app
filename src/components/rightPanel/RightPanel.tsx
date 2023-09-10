import { useEffect, useState } from 'react';
import { useLazyGetWeatherForecastQuery } from '../../slices/weatherSlice';
import { CurrentWeather } from './CurrentWeather';
import { RightHeader } from './RightHeader';
import { WeatherHours } from './WeatherHours';
import { CurrentWeatherData, WeatherByHourData, WeatherForecast } from '../../types';
import { useAppSelector } from '../../hooks';
import { WeatherHelper } from '../../utils/weatherHelper';
import Forecast from './Forecast';

const RightPanel = () => {
    const { latitude, longitude } = useAppSelector(state => state.location);
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>({
        iconName: '',
        description: '',
        temp: '',
    });
    const [weatherByHour, setWeatherByHour] = useState<WeatherByHourData[]>([])
    const [weatherForecast, setWeatherForecast] = useState<WeatherForecast[]>([])

    const [getWeatherDataTrigger] = useLazyGetWeatherForecastQuery();

    useEffect(() => {
        const getData = async () => {
            if (!latitude || !longitude) return;
            const data = await getWeatherDataTrigger({ lat: latitude, lon: longitude }, true).unwrap();

            const currentHour = new Date().getHours();
            const currentHourIndex = currentHour + 24;

            const currentWeatherCode = data.hourly.weathercode[currentHourIndex];
            const currentTemp = data.hourly.temperature_2m[currentHourIndex];
            const iconName = WeatherHelper.getWeatherByCode(currentWeatherCode)?.iconName;
            const weatherDescription = WeatherHelper.getWeatherByCode(currentWeatherCode)?.description;

            setCurrentWeather({
                iconName: iconName ? iconName : 'AiOutlineQuestionCircle',
                description: weatherDescription ? weatherDescription : 'unknown',
                temp: `${currentTemp}°C`,
            });

            setWeatherByHour([]);
            for (let i = currentHourIndex; i < currentHourIndex + 12; i++) {
                const hour = i % 24;
                const iconName = WeatherHelper.getWeatherByCode(data.hourly.weathercode[i])?.iconName;
                setWeatherByHour(current => [...current, {hour: `${hour}`, iconName: iconName ? iconName : 'AiOutlineQuestionCircle'}]);
            }
            setWeatherForecast([])
            for (let i = 0; i < data.daily.time.length; i++) {
                const icon = WeatherHelper.getWeatherByCode(data.daily.weathercode[i])?.iconName;
                const weather: WeatherForecast = {
                    maxTemp: data.daily.temperature_2m_max[i],
                    minTemp: data.daily.temperature_2m_min[i],
                    iconName: icon ? icon : 'AiOutlineQuestionCircle',
                    rainChanse: data.daily.precipitation_probability_max[i],
                }
                setWeatherForecast(current => [...current, weather]);
            }
        };
        getData();
    }, [latitude, longitude]);
    return (
        <div className="md:w-2/6 h-screen bg-sky-900 text-white p-5 flex flex-col px-10">
            <RightHeader />
            <CurrentWeather {...currentWeather} />
            <WeatherHours weatherArr={weatherByHour}/>
            <Forecast forecastArr={weatherForecast}/>
        </div>
    );
};
export default RightPanel;
