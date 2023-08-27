import { WeatherByHourData } from '../../types';
import { Icon } from '../Icon';

export const WeatherStatHour = ({ hour, iconName }: WeatherByHourData) => {
  return (
    <div className="flex flex-col items-center px-3 py-5">
      <p className="text-sm">{hour}</p>
      {iconName.length > 1 && <Icon name={iconName} iconProps={{className: "text-5xl"}}/>}
    </div>
  );
};
