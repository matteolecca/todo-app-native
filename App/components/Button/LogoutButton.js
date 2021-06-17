import React, { useContext } from 'react';
import { ActivityIndicator, Keyboard, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../hooks/auth-hook';
import { removeLocalData } from '../../util/storeLocal';
import styles from './Button.styles'

const Button = props => {
    const { children, onPress, loading, disabled } = props
    const context = useContext(AuthContext)
    const style = disabled ? styles.disabled : null

    const pressHandler = async () =>{
        console.log(await removeLocalData('token'))
        context.setAuth(false)
    }

    return (
        <TouchableOpacity onPress={pressHandler} style={[styles.button, style, { backgroundColor : 'red'}]}>
            {loading ? <ActivityIndicator color='#fff'></ActivityIndicator> : <Text style={styles.text}>Logout</Text>}
        </TouchableOpacity>
    );
};

export default Button;