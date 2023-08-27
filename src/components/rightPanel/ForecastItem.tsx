import { LuDroplet } from 'react-icons/lu';
import { Icon } from '../Icon';
interface IProps {
  dayName: string;
  maxTemp: number;
  minTemp: number;
  iconName: string;
  rainChanse: number;
  isBold: boolean;
}

const ForecastItem = ({ dayName, maxTemp, minTemp, iconName, rainChanse, isBold }: IProps) => {
  return (
    <>
      <h3 className={`block` + isBold ? "font-bold" : ""}>{dayName}</h3>
      <div className="flex flex-row items-center justify-center gap-x-2 mx-auto">
        <div className="flex flex-row items-center">
          <LuDroplet />
          <p className="text-base">{rainChanse}%</p>
        </div>
        <Icon name={iconName} iconProps={{ className: 'text-2xl' }} />
      </div>
      <h3 className="block text-right">
        {Math.round(maxTemp)}°/{Math.round(minTemp)}°
      </h3>
    </>
  );
};

export default ForecastItem;
