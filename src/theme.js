export const Color = {
  primaryColor: "#A8A8A8",
  seconderyColor: "#35b833",
  black: "#000000",
  white: "#ffffff",
};

const lightTheme = {
  BodyColor: Color.primaryColor,
  KeyboardBodyColor: Color.white,
 
};



const darkTheme = {
  BodyColor: Color.black,
  Border: `1px solid ${Color.primaryColor}`,
  KeyboardBodyColor: Color.black,

};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
