import { useState } from "react";
import WeatherWidget from "../components/weatherWidget";
import NewsCarousel from "../API/newsApi";
import NasaCard from "../API/nasaApi";
import PriceCard from "../API/cryptoApi";
import DragAndDrop from "../components/dragAndDrop";
import Toggle from "../components/toggle";
import useDarkMode from "../components/darkMode";
import ClockDashboard from "../components/clockDashboard";
import {
  GloablStyles,
  lightTheme,
  darkTheme,
} from "../components/globalStyles";
import { ThemeProvider } from "styled-components";

const RootLayOut = () => {
  const initialWidgets = [
    { id: 1, content: <WeatherWidget />, x: 10, y: 10 },
    { id: 2, content: <NewsCarousel />, x: 600, y: 50 },
    { id: 3, content: <NasaCard />, x: 100, y: 500 },
    { id: 4, content: <PriceCard />, x: 1115, y: 100 },
    { id: 5, content: <ClockDashboard />, x: 700, y: 500 },
  ];

  const [items, setItems] = useState(initialWidgets);

  const moveWidget = (id: number, deltaX: number, deltaY: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, x: item.x + deltaX, y: item.y + deltaY }
          : item
      )
    );
  };
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GloablStyles theme={themeMode} />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <DragAndDrop items={items} moveWidget={moveWidget} />
    </ThemeProvider>
  );
};

export default RootLayOut;

//move in place
// import { Outlet } from "react-router";
// import { useState } from "react";
// import DragAndDrop from "../components/dragAndDrop";
// import WeatherWidget from "../components/weatherWidget";
// import NewsCarousel from "../API/newsApi";
// import NasaCard from "../API/nasaApi";
// import PriceCard from "../API/cryptoApi";

// const RootLayOut = () => {
//   const widgets = [
//     { id: 1, type: "weather", content: <WeatherWidget /> },
//     { id: 2, type: "news", content: <NewsCarousel /> },
//     { id: 3, type: "nasa", content: <NasaCard /> },
//     { id: 4, type: "price", content: <PriceCard /> },
//   ];

//   const [items, setItems] = useState(widgets);

//   const moveWidget = (fromIndex: number, toIndex: number) => {
//     const updated = [...items];
//     const [moved] = updated.splice(fromIndex, 1);
//     updated.splice(toIndex, 0, moved);
//     setItems(updated);
//   };

//   return (
//     <>
//       <DragAndDrop items={items} moveWidget={moveWidget} />
//       <Outlet />
//     </>
//   );
// };

// export default RootLayOut;
