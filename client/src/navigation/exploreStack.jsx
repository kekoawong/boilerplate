import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation();

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
                options={{
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="Scan" iconName="qrcode-scan" onPress={() => alert('message')} />
                            <Item title="Create Event" iconName="calendar-plus" onPress={() => navigation.navigate('CreateEvent')} />
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