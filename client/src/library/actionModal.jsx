import React, { forwardRef } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Modalize } from 'react-native-modalize';


const ActionModal = forwardRef((props, ref) =>  {

    // define header component
    const ModalEventHeader = () => (
        <View style={{ width: '100%', height: 40}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <Button title='Cancel' onPress={() => ref.current?.close()}/>
            </View>
        </View>
    );

    return (
        <View style={{flex: 1}}>
            <Modalize
                modalStyle={props.style}
                ref={ref}
                modalTopOffset={0}
                onClose={props.onClose}
                closeOnOverlayTap={true}
                withHandle={false}
                HeaderComponent={ModalEventHeader}
                withReactModal={true}
                >
                    {props.children}
            </Modalize>
        </View>
    );
});

ActionModal.defaultProps = {
    style: {        
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
    startsOpen: true
};

ActionModal.propTypes = {
    style: PropTypes.object,
    startsOpen: PropTypes.bool,
    onClose: PropTypes.func
};

export default ActionModal;
