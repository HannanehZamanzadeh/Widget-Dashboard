import { useState } from "react";

const useLightkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return [theme, toggleTheme];
};
export default useLightkMode;
