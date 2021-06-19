import React from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableOpacity } from 'react-native';
import { globalColors } from '../../constants/colors';
import styles from './Button.styles'
const Button = props => {
    const { children, onPress, loading, disabled, color, style } = props
    const status = disabled ? styles.disabled : null
    const background = color ? color : globalColors.appColor
    const pressHandler = () =>{
        onPress()
        Keyboard.dismiss()
    }

    return (
        <TouchableOpacity disabled={disabled} onPress={pressHandler} style={[styles.button, style, status,{backgroundColor : background}]}>
            {loading ? <ActivityIndicator color='#fff'></ActivityIndicator> : <Text style={styles.text}>{children}</Text>}
        </TouchableOpacity>
    );
};

export default Button;