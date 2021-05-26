import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainFeed from 'src/feed/mainFeed';

export default function EngageStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Engagement" component={MainFeed} />
        </Stack.Navigator>
    );
}