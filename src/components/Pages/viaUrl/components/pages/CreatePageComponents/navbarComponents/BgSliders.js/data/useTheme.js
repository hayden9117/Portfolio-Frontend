import { useState } from "react";
import { colorList } from "./colorList";
export default function useTheme() {
  const getTheme = (prop) => {
    let userTheme = `
color: ${prop};
height: 8;
width: 80%;
`;
    if (!prop) {
      let userTheme = `
color: #ffff;
height: 8;
width: 80%;
`;
      return userTheme;
    } else {
      return userTheme;
    }
  };

  const [theme, setTheme] = useState((color) => getTheme(color));
  const saveTheme = (userTheme) => {
    setTheme(userTheme);
  };
  return {
    setTheme: saveTheme,
    theme,
  };
}
