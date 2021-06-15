import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './Input.styles'
const Input = props => {
    const  { icon,   } = props
    const invalid = !props.valid ? styles.invalid : null
    return (
       <View style={[styles.container, invalid]}>
           <View style={styles.iconContainer}>
           {icon}
           </View>
           <TextInput  {...props} style={styles.input}></TextInput>
       </View>
    );
};

export default Input;