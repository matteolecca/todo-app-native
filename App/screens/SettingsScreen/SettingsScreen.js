import React from 'react';
import { ActivityIndicator, View, Text, SafeAreaView } from 'react-native';
import { useContext } from 'react/cjs/react.development';
import mainStyles from '../../App.styles'
import { AuthContext } from '../../hooks/auth-hook';
const User = props => {
    const context = useContext(AuthContext)
    const { colorScheme } = context
    return (
        <View style={mainStyles.container}>
            <SafeAreaView style={[mainStyles.screen, { backgroundColor : colorScheme.mainBackground}]}>
                <Text style={[mainStyles.title, { color : colorScheme.mainColor}]}>Settings</Text>
            </SafeAreaView>
        </View>
    );
};

export default User;