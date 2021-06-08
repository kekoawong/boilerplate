import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { SearchBar, Card, Button, Icon } from 'react-native-elements';

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

export default function MainExplore() {

  return (
    <ScrollView style={styles.mainContainer}
    >
      <HeaderSearchBar/>
      <Text>Explore Screen</Text>
    </ScrollView>
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