import { Icon } from './Icon';
import { CurrentWeatherData } from '../types';

export const CurrentWeather = ({ temp, description, iconName }: CurrentWeatherData) => {
  return (
    <div className="flex flex-col w-full pb-8 border-b-2 border-slate-400">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-6xl pb-2">{temp}</h3>
          <h4 className="text-left">{description}</h4>
        </div>
        {iconName.length > 1 && <Icon name={iconName} iconProps={{ className: 'text-9xl' }} />}
      </div>
    </div>
  );
};
