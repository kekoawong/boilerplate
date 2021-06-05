import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useHeaderHeight } from '@react-navigation/stack';

function HeaderSearchBar(props) {

  // set initial states
  const [searchText, setSearchText] = useState('');

  return (
    <SearchBar
      placeholder="Type Here..."
      containerStyle={styles.searchContainer}
      inputContainerStyle={{margin: 50, height: 30}}
      onChangeText={setSearchText}
      value={searchText}
      platform={'ios'}
    />
  );
}

export default function MainFeed() {

  return (
    <View style={styles.mainContainer}>
      <HeaderSearchBar/>
      <Text>Explore Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    searchContainer: {
      margin: 10,
      height: 30
    }
});