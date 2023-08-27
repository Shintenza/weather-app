import { OverviewElement } from '../../types';
const WeatherStat = ({ statName, current, diff, unit, icon }: OverviewElement) => {
    return (
        <div className="flex w-1/4 bg-gray-100 w-full p-5 rounded-xl gap-x-3">
            {icon}
            <div className="flex flex-col w-full">
                <h5>{statName}</h5>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl block">
                        {current} {unit}
                    </h1>
                    <p className="text-gray-400 block">
                        {diff} {unit}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default WeatherStat;
