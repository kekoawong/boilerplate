import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import MainExplore from 'screens/explore/mainExplore';


export default function ExploreStack() {

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
                    shadowColor: 'transparent',
                    elevation: 0,
                } 
            }}
        >
            <Stack.Screen name="Explore" 
                component={MainExplore} 
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="Scan" iconName="qrcode-scan" onPress={() => navigation.navigate('Scan')} />
                            <Item title="Create Event" iconName="calendar-plus" onPress={() => navigation.navigate('CreateEvent')} />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="search" iconName="account" onPress={() => alert('account')} />
                        </HeaderButtons>
                    )
                })}
            />
        </Stack.Navigator>
    );
}