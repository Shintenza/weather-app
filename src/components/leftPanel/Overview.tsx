import WeatherStat from './WeatherStat';
import Chart from './Chart';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { ChartDataset, OverviewElement } from '../../types';
import { useLazyGetWeatherForecastQuery } from '../../slices/weatherSlice';
import { LuArrowBigDown, LuCloudRainWind, LuSun, LuWind } from 'react-icons/lu';

const Overview = () => {
    const { latitude, longitude } = useAppSelector(state => state.location);
    const [getWeatherDataTrigger] = useLazyGetWeatherForecastQuery();
    const [weatherStats, setWetherStats] = useState<OverviewElement[]>([]);
    const [chartDataset, setChartDataset] = useState<ChartDataset>({name: "", labels: [], data: []});

    useEffect(() => {
        const setWeatherState = async () => {
            if (!latitude || !longitude) return;
            const data = await getWeatherDataTrigger({ lat: latitude, lon: longitude }, true).unwrap();

            const windSpeedInfo: OverviewElement = {
                statName: 'Wind speed',
                current: data.daily.windspeed_10m_max[1],
                diff: Math.round((data.daily.windspeed_10m_max[1] - data.daily.windspeed_10m_max[0]) * 100) / 100,
                unit: 'km/h',
                icon: <LuWind className="text-6xl text-blue-500" />,
            };

            const rainChanseInfo: OverviewElement = {
                statName: 'Rain chanse',
                current: data.daily.precipitation_probability_max[1],
                diff: data.daily.precipitation_probability_max[1] - data.daily.precipitation_probability_max[0],
                unit: '%',
                icon: <LuCloudRainWind className="text-6xl text-blue-500" />,
            };
            const currentHour = new Date().getHours();
            const currentHourIndex = currentHour + 24;
            const prevHourIndex = currentHour;

            const pressureInfo: OverviewElement = {
                statName: 'Pressure',
                current: data.hourly.surface_pressure[currentHourIndex],
                diff:
                    Math.round(
                        (data.hourly.surface_pressure[currentHourIndex] - data.hourly.surface_pressure[prevHourIndex]) *
                        100
                    ) / 100,
                unit: 'hpa',
                icon: <LuArrowBigDown className="text-6xl text-blue-500" />,
            };

            const uvInfo: OverviewElement = {
                statName: 'UV Index',
                current: data.daily.uv_index_max[1],
                diff: Math.round((data.daily.uv_index_max[1] - data.daily.uv_index_max[0]) * 100) / 100,
                unit: '',
                icon: <LuSun className="text-6xl text-blue-500" />,
            };

            // skips previous day
            const temperaturesArrray = data.hourly.temperature_2m.slice(24, 24 + 24 + 1)
            const chartLabels: string[] = [];

            for (let i = 0; i < 24; i++) {
                if (i < 10) {
                    chartLabels.push(`0${i}:00`);
                } else {
                    chartLabels.push(`${i}:00`);
                }
            }
            setWetherStats(() => [windSpeedInfo, rainChanseInfo, pressureInfo, uvInfo]);
            setChartDataset({labels: chartLabels, data: temperaturesArrray, name: "Temperature"});
        };
        setWeatherState();
    }, [latitude, longitude]);

    // TODO use that isLoading to show spinner
    return (
        <div className="mx-auto py-6 flex flex-col grow w-full overflow-hidden">
            <h3 className="font-bold">Today overview</h3>
            <div className="container flex flex-col sm:grid grid-cols-2 mx-auto gap-4 py-3 pt-4 min-h-[40%]">
                {weatherStats.map((element, index) => (
                    <WeatherStat key={index} {...element} />
                ))}
            </div>
            <Chart {...chartDataset}/>
        </div>
    );
};
export default Overview;
