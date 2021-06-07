import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from 'navigation/bottomTab';
import CreateEvent from 'event/createEvent';

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
            <Stack.Screen 
                name="CreateEvent" 
                component={CreateEvent}
                options={{ 
                    headerShown: false,
                    cardStyle: { backgroundColor: 'transparent' }
                }}
            />
        </Stack.Navigator>
    );
}