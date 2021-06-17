
import React from 'react';
import { View, Button, Text } from 'react-native';

const Details = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About</Text>
    </View>
);

Details.navigationOptions = {
    title: 'Details',
}


export default Details;