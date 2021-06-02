import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function MainFeed() {

    // set initial states
    const [searchText, setSearchText] = useState('');

    // get platform for searchbar
    const platform = Platform.OS === 'android' ? 'android' : 'ios';

    return (
      <View style={styles.mainContainer}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={setSearchText}
          value={searchText}
          platform={platform}
        />
        <Text>Explore Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    }
});