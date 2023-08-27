import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';

export const RightHeader = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const { city, region, country } = useAppSelector(state => state.location);
  useEffect(() => {
    setInterval(() => {
      const today = new Date();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      const time = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`;
      setCurrentTime(time);
    }, 30);
  }, []);
  return (
    <div className="flex justify-between items-center pb-10 pt-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{city}</h2>
        <h3 className="font-light">
          {region}, {country}
        </h3>
      </div>
      <div>
        <h2 className="text-5xl">{currentTime}</h2>
      </div>
    </div>
  );
};
