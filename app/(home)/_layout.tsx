import Header from '@/components/Header/Header';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {
 



  return (
    
      <Stack>
        
        <Stack.Screen name="index"  options={{
          title: "index",
          header: () => <Header label="Home" hideBackBtn={true} />,
        }} />

      </Stack>
    
    
  );
}
