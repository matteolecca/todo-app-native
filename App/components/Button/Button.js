import React from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles'
const Button = props => {
    const { children, onPress, loading, disabled } = props
    const style = disabled ? styles.disabled : null

    const pressHandler = () =>{
        onPress()
        Keyboard.dismiss()
    }

    return (
        <TouchableOpacity disabled={disabled} onPress={pressHandler} style={[styles.button, style]}>
            {loading ? <ActivityIndicator color='#fff'></ActivityIndicator> : <Text style={styles.text}>{children}</Text>}
        </TouchableOpacity>
    );
};

export default Button;