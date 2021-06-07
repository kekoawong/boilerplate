import { DefaultTheme } from '@react-navigation/native';

export const LightTheme = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: "#8947ed",
        background: 'white',
        text: 'black',
        normalText: 'black'
    },
  };

export const DarkTheme = {
  dark: true,
  colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'grey',
      text: 'white',
      card: 'grey',
      border: 'purple',
      normalText: 'white'
  },
};