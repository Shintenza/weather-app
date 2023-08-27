import { DecodedWeather } from '../types';

class WeatherHelper {
  private static weatherCodesMap = new Map<number, DecodedWeather>([
    [0, { iconName: 'LuSun', description: 'Clear sky' }],
    [1, { iconName: 'LuCloudSun', description: 'Mainly clear' }],
    [2, { iconName: 'LuCloudSun', description: 'Partly cloudy' }],
    [3, { iconName: 'LuCloudSun', description: 'Overcast' }],
    [45, { iconName: 'LuCloudFog', description: 'Fog' }],
    [46, { iconName: 'LuCloudFog', description: 'Depositing rime fog' }],
    [51, { iconName: 'LuCloudDrizzle', description: 'Drizzle: Light intensity' }],
    [53, { iconName: 'LuCloudDrizzle', description: 'Drizzle: Moderate intensity' }],
    [55, { iconName: 'LuCloudDrizzle', description: 'Drizzle: Dense intensity' }],
    [56, { iconName: 'LuCloudDrizzle', description: 'Freezing Drizzle: Light intensity' }],
    [57, { iconName: 'LuCloudDrizzle', description: 'Freezing Drizzle: Dense intensity' }],
    [61, { iconName: 'LuCloudRain', description: 'Rain: Slight intensity' }],
    [63, { iconName: 'LuCloudRain', description: 'Rain: Moderate intensity' }],
    [65, { iconName: 'LuCloudRain', description: 'Rain: Heavy intensity' }],
    [66, { iconName: 'LuCloudRain', description: 'Freezing Rain: Light intensity' }],
    [67, { iconName: 'LuCloudRain', description: 'Freezing Rain: Heavy intensity' }],
    [71, { iconName: 'LuCloudSnow', description: 'Snowfall: Slight intensity' }],
    [73, { iconName: 'LuCloudSnow', description: 'Snowfall: Moderate intensity' }],
    [75, { iconName: 'LuCloudSnow', description: 'Snowfall: Heavy intensity' }],
    [77, { iconName: 'LuSnow', description: 'Snow grains' }],
    [80, { iconName: 'LuCloudSunRain', description: 'Rain showers: Slight intensity' }],
    [81, { iconName: 'LuCloudSunRain', description: 'Rain showers: Moderate intensity' }],
    [82, { iconName: 'LuCloudSunRain', description: 'Rain showers: Violent intensity' }],
    [85, { iconName: 'LuCloudSnow', description: 'Snow showers: Slight intensity' }],
    [86, { iconName: 'LuCloudSnow', description: 'Snow showers: Heavy intensity' }],
    [95, { iconName: 'LuCloudLightning', description: 'Thunderstorm: Slight or moderate' }],
    [96, { iconName: 'LuCloudLightning', description: 'Thunderstorm with slight hail' }],
    [99, { iconName: 'LuCloudLightning', description: 'Thunderstorm with heavy hail' }],
  ]);
  public static getWeatherByCode(code: number): DecodedWeather | undefined {
    return this.weatherCodesMap.get(code);
  }
  public static getFormattedTime(hour: number, minutes: number): string {
    const strHour = hour < 10 ? `0${hour}` : `${hour}`;
    const strMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${strHour}:${strMinutes}`;
  }
}

export { WeatherHelper };
