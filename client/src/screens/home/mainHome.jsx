import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import HomeViz from 'src/dataViz/homeViz';
import ActionButtons from 'src/library/actionButtons';

export default function MainFeed() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HomeViz/>
        <Text>sdf Screen</Text>
        <View style={styles.buttonContainer}>
            <FAB
            style={styles.fab}
            label="Create Event"
            icon="emoticon-cool"
            onPress={() => console.log('Pressed')}
            />
            <FAB
            style={styles.fab}
            label="Scan"
            icon="qrcode-scan"
            onPress={() => console.log('Pressed')}
            />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fab: {
    marginLeft: 10
  },
});