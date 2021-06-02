import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { SearchBar } from 'react-native-elements';
import MainExplore from 'screens/explore/mainExplore';

function HeaderSearchBar(props) {

    // set initial states
    const [searchText, setSearchText] = useState('');
    
    // get platform for searchbar
    const platform = Platform.OS === 'android' ? 'android' : 'ios';
    console.log(props);

    return (
      <SearchBar
        placeholder="Type Here..."
        containerStyle={{flex: 1, margin: 7, width: 300}}
        onChangeText={setSearchText}
        value={searchText}
        platform={platform}
      />
    );
}

export default function ExploreStack() {

    // for header button
    const MaterialHeaderButton = (props) => (
        // the `props` here come from <Item ... />
        // you may access them and pass something else to `HeaderButton` if you like
        <HeaderButton IconComponent={Icon} iconSize={23} {...props} />
    );
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Explore" 
                component={MainExplore} 
                options={{
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="Scan" iconName="qrcode-scan" onPress={() => alert('message')} />
                            <Item title="Create Event" iconName="calendar-plus" onPress={() => alert('message')} />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                            <Item title="search" iconName="account" onPress={() => alert('account')} />
                        </HeaderButtons>
                    ),
                    headerTitle: (props) => <HeaderSearchBar {...props} /> 
                }}
            />
        </Stack.Navigator>
    );
}