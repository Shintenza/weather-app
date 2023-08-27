import { WeatherStatHour } from './WeatherStatHour';
import { WeatherByHourData } from '../../types';
import { WeatherHelper } from '../../utils/weatherHelper';

export const WeatherHours: React.FC<{ weatherArr: WeatherByHourData[] }> = ({ weatherArr }) => {
  return (
    <div className="scrolled-box w-full overflow-auto flex flex-row border-b-2 border-slate-400">
      {weatherArr.map((element: WeatherByHourData, index) => (
        <WeatherStatHour hour={WeatherHelper.getFormattedTime(parseInt(element.hour), 0)} iconName={element.iconName} key={index}/>
      ))}
    </div>
  );
};
