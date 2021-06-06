import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function CreateEvent() {

    // variables
    const snapPoints = useMemo(() => [0, '25%', '50%', '100%'], []);

    // callbacks
    const handleSheetChanges = () => console.log('handle changes');

    // renders
    return (
        <View style={styles.container}>
            <BottomSheet
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'transparent',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        shadowColor: 'black'
    },
});
