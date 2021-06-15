import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native'
import Input from '../../components/Input/Input';
import styles from './Auth.styles'
import Button from '../../components/Button/Button';
import KeyboardListener from '../../components/KeyboardListener/KeyboardListener';
import loginReducer from '../../hooks/auth-hook'
import { AuthContext } from '../../hooks/auth-hook'
import { useContext } from 'react';
const Home = ({ navigation }) => {
    const { loading, logged, login, inputs, setValue, message, error } = loginReducer()
    const authContext = useContext(AuthContext)
    useEffect(() => {
        if (logged) {
            authContext.setAuth(true)
        }
    }, [logged])
    
    return (
        <KeyboardListener>
            <View style={styles.home}>
                <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/app-logo-web.png')} />
                {inputs ? Object.keys(inputs).map(i => <Input key={i} onChangeText={(e) => setValue(e, i)} {...inputs[i]} />) : null}
                <Text style={{ color: !error ? '#333' : 'red' }}>{message}</Text>
                <Button disabled={!inputs.email.valid || !inputs.password.valid} onPress={login} loading={loading}>Login</Button>
            </View>
        </KeyboardListener>
    );
};

export default Home;