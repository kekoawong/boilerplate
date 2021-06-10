import React, { useEffect, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

export default function CreateEvent() {

    // variables
    const modulize = useRef(null);
    const navigation = useNavigation();

    // open modal
    useEffect(() => {
        modulize.current?.open();
    });

    // define components
    const ModalEventHeader = () => (
        <View style={{ width: '100%', height: 40}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <Button title='Cancel' onPress={() => modulize.current?.close()}/>
            </View>
        </View>
    );

    return (
        <View style={{flex: 1}}>
            <Modalize
                modalStyle={styles.container}
                ref={modulize}
                modalTopOffset={0}
                onClose={() => navigation.goBack()}
                closeOnOverlayTap={true}
                withHandle={false}
                HeaderComponent={ModalEventHeader}
                withReactModal={true}
                >
                    {props.children}
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
});
