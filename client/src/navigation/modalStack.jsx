import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import BottomTab from 'navigation/bottomTab';
import CreateEvent from 'event/createEvent';
import ScannerScreen from 'library/scannerScreen';

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
            <Stack.Screen 
                name="Scan"
                component={ScannerScreen}
                navigationOptions
                options={({ navigation }) => ({
                    title: 'Scan Event Code',
                    headerLeft: null,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={Button}>
                            <Item title='Cancel' onPress={() => navigation.goBack()}/>
                        </HeaderButtons>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}