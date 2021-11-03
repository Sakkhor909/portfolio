export const Color = {
  primaryColor: "#A8A8A8",
  seconderyColor: "#35b833",
  black: "#000000",
  white: "#ffffff",
};

const lightTheme = {
  BodyColor: Color.primaryColor,
  KeyboardBodyColor: Color.white,
  boxShadow: "6px 9px 0px 2px rgb(0 0 0 / 25%)",
};

const darkTheme = {
  BodyColor: Color.black,
  Border: `1px solid ${Color.primaryColor}`,
  KeyboardBodyColor: Color.black,
  boxShadow: "2px 9px 0px 2px rgb(145 145 145)",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
