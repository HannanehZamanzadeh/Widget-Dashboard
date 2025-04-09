import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Progress } from "./ui/progress";
import ErrorBlock from "./ErrorBlock";
import { FetchWeather } from "../API/weatherApi";
const WeatherWidget = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: FetchWeather,
  });
  useEffect(() => {
    if (data) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.weatherapi.com/weather/widget.ashx?loc=568661&wid=4&tu=1&div=weatherapi-weather-widget-4";
      script.async = true;
      document
        .getElementById("weatherapi-weather-widget-4")
        ?.appendChild(script);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Progress value={33} className="mt-5 w-100 ml-120" />}
      {isError && (
        <ErrorBlock title="Something went wrong" message="Try again" />
      )}
      {data && (
        <div
          id="weatherapi-weather-widget-4"
          className="w-110 col-span-3 col-start-1 p-2"
        ></div>
      )}
    </>
  );
};

export default WeatherWidget;
