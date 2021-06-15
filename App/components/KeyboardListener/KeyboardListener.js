import React from 'react';
import {  Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

const KeyboardListener = props => {
    const { children } = props

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={150}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, backgroundColor : '#fff' }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )


};

export default KeyboardListener;