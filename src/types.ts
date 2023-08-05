import { ReactNode } from 'react';

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
}

export type { WeatherData, GeoData, OverviewElement, ChartDataset };
