import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainFeed from 'src/feed/mainFeed';

export default function HomeStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainFeed} />
        </Stack.Navigator>
    );
}