import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native'
import Input from '../../components/Input/Input';
import styles from './Auth.styles'
import Button from '../../components/Button/Button';
import KeyboardListener from '../../components/KeyboardListener/KeyboardListener';
import loginReducer from '../../hooks/auth-hook'
import { AuthContext } from '../../hooks/auth-hook'
import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import mainStyles from '../../App.styles'
const Home = ({ navigation }) => {
    const { logging, checked, logged, login, inputs, setValue, message, user, checkAuth } = loginReducer()
    const authContext = useContext(AuthContext)

    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    useEffect(() => {
        if (logged) {
            authContext.setAuth(true)
            if (user) authContext.setUserData(user)
        }
    }, [logged, user])

    return (
        <KeyboardListener>
            {checked ?
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/app-logo-web.png')} />
                        {inputs ? Object.keys(inputs).map(i => <Input key={i} onChangeText={(e) => setValue(e, i)} {...inputs[i]} />) : null}
                        <Text style={{ color: 'red' }}>{message}</Text>
                        <Button disabled={!inputs.email.valid || !inputs.password.valid} onPress={login} loading={logging}>Login</Button>
                    </View>
                </View>
                :
                <View style={styles.loadingPage}>
                    <ActivityIndicator />
                </View>
            }
        </KeyboardListener>
    );
};

export default Home;