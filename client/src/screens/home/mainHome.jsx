import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import HomeViz from 'src/dataViz/homeViz';

export default function MainFeed() {
    return (
      <View style={styles.mainContainer}>
        <HomeViz
          width={400}
        />
        <Text>sdf Screen</Text>
        <View style={styles.buttonContainer}>
            <FAB
              style={styles.fab}
              label="Create Event"
              icon="calendar-plus"
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
  mainContainer: { 
    flex: 1
  },
  dataViz: {
    height: 200
  },
  buttonContainer: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fab: {
    marginLeft: 10,
    backgroundColor: '#8947ed'
  },
});