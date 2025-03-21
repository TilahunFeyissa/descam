/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useColorScheme } from "react-native";

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
  },
  dark: {
    text: '#ECEDEE',
    background: '#881f1d',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: 'white',
  },
  primary:"#881f1d"
  
};
export function getColor(colorName: keyof typeof Colors.light) {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? Colors.dark[colorName] : Colors.light[colorName];
}

export default Colors;