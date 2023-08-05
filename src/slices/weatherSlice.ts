import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherData, GeoData } from '../types';

export const openMeteoApi = createApi({
  reducerPath: 'openMeteoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.open-meteo.com/v1/' }),
  endpoints: builder => ({
    getWeatherForecast: builder.query<WeatherData, GeoData>({
      query: data =>
        `forecast?latitude=${data.lat}&longitude=${data.lon}&hourly=temperature_2m,weathercode,surface_pressure&daily=weathercode,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=auto&past_days=1`,
    }),
  }),
});

export const { useLazyGetWeatherForecastQuery } = openMeteoApi;
