import { createGlobalStyle } from "styled-components";

export interface MyDefaultTheme {
  body: string;
  text: string;
  primary: string;
}
export const GloablStyles = createGlobalStyle<{ theme: MyDefaultTheme }>`
body{
background:${({ theme }) => theme.body};
text:${({ theme }) => theme.text};
}
`;
export const lightTheme: MyDefaultTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#7FFFD4",
};
export const darkTheme: MyDefaultTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#121212",
};
