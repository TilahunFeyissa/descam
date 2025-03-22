/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useTheme } from "@/hooks/ThemeContext";
import { useContext } from "react";
import { useColorScheme } from "react-native";
// import { useTheme } from "@/contexts/CustomThemeContext"; 
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: 'white',
    primary:"",
    secondary:"#FCD535"
  },
  dark: {
    text: '#ECEDEE',
    background: '#000000',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: 'white',
    primary:"#FCD535",
    secondary:"#FCD535"
  },
  primary:"#881f1d"
  
};
export function getColor(colorName: keyof typeof Colors.light) {
  const { theme } =useTheme(); // Get the current theme from context
  const systemColorScheme = useColorScheme(); // Get system theme
  const activeTheme = theme || systemColorScheme || "light"; // Use context theme, else system theme, else default

  return Colors[activeTheme][colorName];
}

export default Colors;