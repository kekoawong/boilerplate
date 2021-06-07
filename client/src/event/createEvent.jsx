import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import { ButtonGroup } from 'react-native-elements';
import CreateEventTypes from 'event/createEventTypes';

function ModalEventHeader() {

    return (
        <View style={{ width: '100%', height: 30}}>
            <View style={styles.contentContainer}>
                 <Text>Create Event</Text>
            </View>
        </View>
    );
}

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
                withReactModal={true}>
                <View style={styles.contentContainer}>
                    <ButtonGroup
                        onPress={setSelectedIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 100}} />
                    <Text>Awesome 🎉</Text>
                    <CreateEventTypes/>
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
