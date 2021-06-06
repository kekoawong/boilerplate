import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function CreateEvent() {

    // variables
    const modulize = useRef(null);

    // callbacks
    const handleSheetChanges = () => console.log('handle changes');

    // renders
    return (
        <View style={{flex: 1}}>
            <Modalize
                ref={modulize}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </Modalize>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
