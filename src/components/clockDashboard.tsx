import CityTime from "./cityTime";
const ClockDashboard = () => {
  const cities = [
    { name: "New York", timezone: "America/New_York" },
    { name: "Tehran", timezone: "Asia/Tehran" },
    { name: "London", timezone: "Europe/London" },
  ];
  return (
    <div className="bg-white w-150 rounded-3xl h-40 border-gray-400 border-1">
      <h1 className="text-center font-bold">Clock Dashboard</h1>
      <ul className="flex justify-around">
        {cities.map((city, index) => (
          <CityTime city={city} key={index} />
        ))}
      </ul>
    </div>
  );
};
export default ClockDashboard;
