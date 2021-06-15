import React from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles'
import mainStyles from '../../App.styles'
import { Icon } from 'react-native-elements';


const Button = props => {
    const { children, onPress, loading, disabled } = props
    const style = disabled ? styles.disabled : null

    const pressHandler = () =>{
        onPress()
        Keyboard.dismiss()
    }

    return (
        <TouchableOpacity disabled={disabled} onPress={pressHandler} style={[mainStyles.shadowbox,styles.floatingButton, style,{shadowOpacity: .25} ]}>
            {loading ? <ActivityIndicator color='#fff'></ActivityIndicator> : <Icon color='#fff' adjustsFontSizeToFit type='material-icons' name='add'/>}
        </TouchableOpacity>
    );
};

export default Button;