import React from 'react';
import {  TextInput, View } from 'react-native';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../hooks/auth-hook';
import { ModeView } from '../../MainComponents/MainComponents';
import styles from './Input.styles'
const Input = props => {
    const context = useContext(AuthContext)
    const { colorScheme } = context
    const  { icon,   } = props
    const invalid = !props.valid ? styles.invalid : null
    return (
       <ModeView style={[styles.container, invalid]}>
           <ModeView style={styles.iconContainer}>
           {icon}
           </ModeView>
           <TextInput  {...props} style={[styles.input, { color : colorScheme.mainColor}]}></TextInput>
       </ModeView>
    );
};

export default Input;