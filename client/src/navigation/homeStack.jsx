import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainHome from 'screens/home/mainHome';

export default function HomeStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainHome} />
        </Stack.Navigator>
    );
}