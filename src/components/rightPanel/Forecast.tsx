import { WeatherForecast } from '../../types';
import ForecastItem from './ForecastItem';

const Forecast: React.FC<{ forecastArr: WeatherForecast[] }> = ({ forecastArr }) => {
  const getWeekdaysNames = (): string[] => {
    const weekdays: string[] = [];
    const baseDate = new Date();
    for (let i = 0; i < 7; i++) {
      if (i == 0) {
        weekdays.push('Today');
      } else {
        weekdays.push(baseDate.toLocaleString('en-US', { weekday: 'long' }));
      }
      baseDate.setDate(baseDate.getDate() + 1);
    }
    weekdays.unshift('Yeasterday');
    return weekdays;
  };
  return (
    <div className="grid grid-cols-3 pt-8 gap-y-3">
      {forecastArr.map((forecast: WeatherForecast, index: number) => (
        <ForecastItem
          dayName={getWeekdaysNames()[index]}
          maxTemp={forecast.maxTemp}
          minTemp={forecast.minTemp}
          iconName={forecast.iconName}
          rainChanse={forecast.rainChanse}
          isBold={true}
          key={index}
        />
      ))}
    </div>
  );
};

export default Forecast;
