import React from 'react';
import {  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Appearance } from 'react-native';
import { getColorTheme} from '../../constants/colors'
const KeyboardListener = props => {
    const { children } = props
    const theme = Appearance.getColorScheme()

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={0}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, backgroundColor : theme === 'dark' ? '#333' : '#fff' }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )


};

export default KeyboardListener;