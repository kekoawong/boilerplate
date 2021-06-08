import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import Toast from 'react-native-toast-message';
import { ButtonGroup } from 'react-native-elements';
import CreateEventTypes from 'event/createEventTypes';

export default function CreateEvent() {

    // variables
    const modulize = useRef(null);
    const navigation = useNavigation();

    // set states for header
    const [selectedIndex, setSelectedIndex] = useState(0);

    // open modal
    useEffect(() => {
        modulize.current?.open();
    });
    
    // create event function
    const createdEvent = () => {
        modulize.current?.close();
        Toast.show({
            text1: 'Hello',
            text2: 'This is some something 👋',
            visibilityTime: 4000,
            topOffset: 50,
        });
        Vibration.vibrate();
    };

    // define components
    const ModalEventHeader = () => (
        <View style={{ width: '100%', height: 40}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <Button title='Cancel' onPress={() => modulize.current?.close()}/>
            </View>
        </View>
    );
    const component1 = () => <Text>Public</Text>
    const component2 = () => <Text>Private</Text>
    const component3 = () => <Text>For Me</Text>
        
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }];

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
                <View style={styles.contentContainer}>
                    <Text>Event Type</Text>
                    <ButtonGroup
                        onPress={setSelectedIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 100}} />
                    <CreateEventTypes/>
                    <Button title='Create' onPress={createdEvent}/>
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
