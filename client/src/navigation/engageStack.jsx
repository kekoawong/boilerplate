import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainEngage from 'screens/engage/mainEngage';

export default function EngageStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Engagement" component={MainEngage}
            />
        </Stack.Navigator>
    );
}