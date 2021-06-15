import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Burger from '../../components/Topbar/Burger';
import mainStyles from '../../App.styles'
const User = props => {
    return (
        <View style={mainStyles.container}>
            <View style={[mainStyles.screen, ]}>
               <Text style={mainStyles.title}>User</Text>
            </View>
        </View>
    );
};

export default User;