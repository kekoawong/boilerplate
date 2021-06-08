import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {

  return (
    <ScrollView style={styles.mainContainer}
    >
      <Text>Profile Screen</Text>
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