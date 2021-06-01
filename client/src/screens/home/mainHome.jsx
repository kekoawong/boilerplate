import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import FAB from 'src/library/FAB';
import HomeViz from 'src/dataViz/homeViz';

export default function MainFeed() {
    return (
      <View style={styles.mainContainer}>
        <HomeViz
          width={400}
        />
        <Text>sdf Screen</Text>
        <FAB
          style={styles.fabContainer}
          icon={
            <Icon
              name="calendar-plus"
              size={25}
              color="white"
              margin={50}
            />
          }
        />
        <Button 
          title="Create Event" 
          raised
          containerStyle={styles.fabContainer}
          buttonStyle={styles.fab}
          icon={
            <Icon
              name="calendar-plus"
              size={25}
              color="white"
              margin={50}
            />
          }
        />
        <View style={styles.buttonContainer}>
            <Button
              style={styles.fab}
              raised
              title="Create Event"
              icon="calendar-plus"
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
  fabContainer: {
    borderRadius: 50, 
    maxWidth: '40%',
    marginLeft: 10
  },
  fab: {
    borderRadius: 50,
    backgroundColor: '#8947ed'
  }
});