import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

function modalHeader() {

    return (
        <View style={{flex: 1, width: '100%'}}>
            <View style={styles.contentContainer}>
                 <Text>cool cool 🎉</Text>
            </View>
        </View>
    );
}

export default function CreateEvent() {

    // variables
    const modulize = useRef(null);
    const navigation = useNavigation();

    // open modal
    useEffect(() => {
        modulize.current?.open();
    });

    return (
        <View style={{flex: 1}}>
            <Modalize
                modalStyle={styles.container}
                ref={modulize}
                modalTopOffset={10}
                onClose={() => navigation.goBack()}
                closeOnOverlayTap={true}
                withHandle={false}
                HeaderComponent={modalHeader}
                withReactModal={true}
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
        backgroundColor: 'white',
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
