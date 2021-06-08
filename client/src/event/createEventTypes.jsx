import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function PublicEvent() {

    const [comment, setComment] = useState('Something');
    const [pickerMode, setPickerMode] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [date, setDate] = useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

    return (
        <View style={{flex: 1}}>
            <Button title="Show Date Picker" onPress={() => setDatePickerVisibility(true)} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                value={date}
                mode="datetime"
                onConfirm={() => setDatePickerVisibility(false)}
                onCancel={() => setDatePickerVisibility(false)}
            />
            <Input
                placeholder='Add Event Title...'
            />
             <Input
                placeholder="Add something"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => setComment(value)}
            />
        </View>
    );
}

export default function CreateEventTypes() {

    return (
        <View style={{flex: 1, width: '95%'}}>
            <PublicEvent/>
        </View>
    );
};