import React from 'react';
import { StatusBar } from 'react-native';
import BottomTab from 'src/navigation/bottomTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar />
        <BottomTab />
    </NavigationContainer>
  );
}
