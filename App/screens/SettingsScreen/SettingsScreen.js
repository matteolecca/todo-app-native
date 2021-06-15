import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import mainStyles from '../../App.styles'
const User = props => {
    return (
        <View style={mainStyles.container}>
            <View style={[mainStyles.screen,]}>
                <Text style={mainStyles.title}>Settings</Text>
            </View>
        </View>
    );
};

export default User;