export const FetchWeather = async () => {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=714bb72dd4cf4e2c86475432251503&q=London&aqi=no"
  );
  if (!response.ok) {
    throw new Error("An Error occured in fetching weather");
  }
  const data = await response.json();
  return data.articles || [];
};
