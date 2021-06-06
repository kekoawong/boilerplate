import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateEvent from 'event/createEvent';
import BottomTab from 'navigation/bottomTab';

export default function ModalStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            mode='modal'
            screenOptions={{
                headerStyle: {
                    shadowColor: 'transparent'
                } 
            }}
        >
            <Stack.Screen 
                        name="Main"
                        component={BottomTab}
                        options={{ headerShown: false }}
            />
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
        </Stack.Navigator>
    );
}