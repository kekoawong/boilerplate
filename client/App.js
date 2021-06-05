import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { LightTheme, DarkTheme } from 'theme';
import BottomTab from 'src/navigation/bottomTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  // get color scheme and set theme
  const scheme = useColorScheme();

  return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
          <StatusBar />
          <BottomTab />
      </NavigationContainer>
  );
}
