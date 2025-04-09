import React from "react";
import { useState, useEffect } from "react";
const CityTime: React.FC<{ city: any }> = ({ city }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: city.timezone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <>
      <div className="flex flex-col items-center ">
        <h2>{city.name}</h2>
        <div className=" m-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-500">
          {formattedTime}
        </div>
      </div>
    </>
  );
};
export default CityTime;
