import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../hooks/auth-hook';

export const ModeView = props => {
    const { children, style } = props
    const context = useContext(AuthContext)
    const { colorScheme, } = context
    return (
        <View style={[style, { backgroundColor: colorScheme.mainBackground }]}>
            {children}
        </View>)
}

export const ModeText = props => {
    const { children, style } = props
    const context = useContext(AuthContext)
    const { colorScheme, } = context
    return (
        <Text style={[style, { color: colorScheme.mainColor }]}>
            {children}
        </Text>)
}

export const ModeButton = props => {
    const { children, style, onPress, color, opacity } = props
    const context = useContext(AuthContext)
    const { colorScheme, } = context
    return (
        <TouchableOpacity
        activeOpacity={ opacity ? 1 : .5}
            onPress={onPress}
            style={[style, { backgroundColor: colorScheme.mainBackground }]}>
            {children}
        </TouchableOpacity>
    )
}
