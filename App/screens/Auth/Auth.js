import React, { useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Input from '../../components/Input/Input';
import styles from './Auth.styles'
import Button from '../../components/Button/Button';
import KeyboardListener from '../../components/KeyboardListener/KeyboardListener';
import loginReducer from '../../hooks/auth-hook'
import { AuthContext } from '../../hooks/auth-hook'
import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import mainStyles from '../../App.styles'
import { ModeButton, ModeText } from '../../MainComponents/MainComponents';

const Home = ({ navigation, route }) => {
    const { params } = route
    const { logging, checked, logged, startAuth, inputs, setValue, message, user, checkAuth } = loginReducer(params ? route.params.context : '')
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
                        <ButtonsBar {...navigation} {...route} />
                        <Text style={{ color: 'red' }}>{message}</Text>
                        <Button disabled={!inputs.email.valid || !inputs.password.valid} style={{width : '80%'}}  onPress={startAuth} loading={logging}>Login</Button>
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

const ButtonsBar = ({ params, name, navigate }) => {
    console.log(params, name, navigate)

    const goto = () => {
        if (params.context === 'login') navigate('signup')
        else navigate('login')
    }
    return (
        <View style={styles.buttonContainer}>

            <ModeButton onPress={goto}>
                <ModeText>{params.context === 'login' ? 'signup' : 'login'}</ModeText>
            </ModeButton>
            {params.context === 'login' &&
                <ModeButton >
                    <ModeText>Forgot password?</ModeText>
                </ModeButton>}

        </View>
    )
}

export default Home;