import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

function HeaderSearchBar() {

    // set initial states
    const [searchText, setSearchText] = useState('');
    
    // get platform for searchbar
    const platform = Platform.OS === 'android' ? 'android' : 'ios';

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearchText}
        value={searchText}
        platform={platform}
      />
    );
}

export default function MainFeed() {

    return (
      <View style={styles.mainContainer}>
        <Text>Explore Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    }
});