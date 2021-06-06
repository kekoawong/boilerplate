import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainEngage() {

    const navigation = useNavigation();
    
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>Engagement Screen</Text>
      </ScrollView>
    );
  }