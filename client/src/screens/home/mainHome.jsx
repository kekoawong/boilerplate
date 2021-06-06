import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, useNavigation } from '@react-navigation/native';
import FAB from 'src/library/FAB';
import HomeViz from 'src/dataViz/homeViz';


export default function MainFeed() {

    const theme = useTheme();
    const navigation = useNavigation();

    return (
      <View style={styles.mainContainer}>
        <HomeViz
          width={400}
        />
        <Text>sdf Screen</Text>
        <View style={styles.buttonContainer}>
            <FAB
              title="Create Event"
              style={{...styles.fabEvent, backgroundColor: theme.colors.primary}}
              icon={
                <Icon
                  style={{marginHorizontal: 4}}
                  name="calendar-plus"
                  size={25}
                  color="white"
                />
              }
              onPress={() => {
                navigation.navigate('CreateEvent');
                console.log('asfs');
              }}
            />
            <FAB
              title="Attend"
              style={{...styles.fabScan, backgroundColor: theme.colors.primary}}
              icon={
                <Icon
                  style={{marginHorizontal: 4}}
                  name="qrcode"
                  size={25}
                  color="white"
                />
              }
              onPress={() => console.log('FAB pressed')}
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
    width: '100%',
    padding: 20,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fabEvent: {
    borderRadius: 50, 
    flex: 3,
    marginHorizontal: 5,
  },
  fabScan: {
    borderRadius: 50, 
    flex: 2,
    marginHorizontal: 5
  }
});