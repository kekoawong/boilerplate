import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default function ActionButtons() {
    return (
        <View style={styles.container}>
            <FAB
            style={styles.fab}
            label="Scan"
            icon="qrcode-scan"
            onPress={() => console.log('Pressed')}
            />
            <FAB
            style={styles.fab}
            label="Scan"
            icon="qrcode-scan"
            onPress={() => console.log('Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fab: {
      margin: 25,
    },
  });