import React from 'react';
import BottomTab from 'root/client/src/navigation/bottomTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <BottomTab/>
    </NavigationContainer>
  );
}
