import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    HeaderButtons,
    HeaderButton,
    Item
  } from 'react-navigation-header-buttons';
import MainHome from 'screens/home/mainHome';

export default function HomeStack() {

    // for header button
    const MaterialHeaderButton = (props) => (
        // the `props` here come from <Item ... />
        // you may access them and pass something else to `HeaderButton` if you like
        <HeaderButton IconComponent={Icon} iconSize={23} {...props} />
    );

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    shadowColor: 'transparent'
                } 
            }}
        >
            <Stack.Screen name="Home" 
                component={MainHome} 
                options={{
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="Message" iconName="chat-processing" onPress={() => alert('message')} />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="search" iconName="account" onPress={() => alert('account')} />
                        </HeaderButtons>
                    )
                  }}
            />
        </Stack.Navigator>
    );
}