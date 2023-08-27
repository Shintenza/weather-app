import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';

interface WeatherForecast {
  maxTemp: number;
  minTemp: number;
  iconName: string;
  rainChanse: number;
}

interface CurrentWeatherData {
  temp: string;
  description: string;
  iconName: string;
}

interface IconProp {
  name: string;
}

interface WeatherByHourData {
  hour: string;
  iconName: string;
}

// chart prop type
interface ChartDataset {
  name: string;
  labels: Array<string>;
  data: Array<number>;
}

// Overwiev element type
interface OverviewElement {
  statName: string;
  current: number;
  diff: number;
  unit: string;
  icon: ReactNode;
}

// geolocation data
interface GeoData {
  lat: number;
  lon: number;
}

// Weather data types
interface WeatherData {
  timezone: string;
  hourly: HourlyWeatherData;
  daily: DailyWeatherData;
}

interface HourlyWeatherData {
  time: Array<string>;
  temperature_2m: Array<number>;
  surface_pressure: Array<number>;
  weathercode: Array<number>;
}

interface DailyWeatherData {
  time: Array<string>;
  weathercode: Array<number>;
  sunrise: Array<string>;
  sunset: Array<string>;
  uv_index_max: Array<number>;
  precipitation_probability_max: Array<number>;
  windspeed_10m_max: Array<number>;
  temperature_2m_max: Array<number>;
  temperature_2m_min: Array<number>;
}

interface DecodedWeather {
  description: string;
  iconName: string;
}

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

export type {
  WeatherData,
  GeoData,
  OverviewElement,
  ChartDataset,
  DecodedWeather,
  typesPropsIcon,
  WeatherByHourData,
  IconProp,
  CurrentWeatherData,
  WeatherForecast,
};
