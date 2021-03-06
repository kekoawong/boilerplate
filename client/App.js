import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { LightTheme, DarkTheme } from 'theme';
import ModalStack from 'src/navigation/modalStack';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  // get color scheme and set theme
  const scheme = useColorScheme();

  return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
          <StatusBar />
          <ModalStack />
          <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
  );
}
