import React, { useContext, useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import mainStyles from '../../App.styles'
import { AuthContext } from '../../hooks/auth-hook'
import { Icon } from 'react-native-elements';
import styles from './User.styles'
import { ModeView, ModeText } from '../../MainComponents/MainComponents';
const icons = {
    morning: { text: 'Good morning,', icon: { color: '#ffc905', type: 'feather', name: 'sun' } },
    evening: { text: 'Good evening,', icon: { color: '#ff4d00', type: 'feather', name: 'sunset' } },
    night: { text: 'Good night,', icon: { color: '#000066', type: 'feather', name: 'moon' } },
}
const User = props => {
    const context = useContext(AuthContext)

    const { user } = context


    return (
        <ModeView style={mainStyles.container}>
            <SafeAreaView style={mainStyles.screen}>
                <WelcomeMessage user={user} />
                <View style={styles.container}>
                    <ModeText style={[mainStyles.title]}>Your data</ModeText>
                    <UserData title='email' value={user.email}/>
                </View>
            </SafeAreaView>
        </ModeView>
    );
};


const UserData = ({title, value}) => {
    return (
        <View style={styles.userData}>
            <ModeText style={[styles.dataTitle]}>{title}</ModeText>
            <ModeText>{value}</ModeText>
        </View>
    )
}

const WelcomeMessage = ({ user }) => {
    const [message, setMessage] = useState('')
    useEffect(() => {
        const time = new Date().getHours()
        const m = time > 6 && time < 13 ? icons.morning : time >= 13 && time < 20 ? icons.evening : icons.night
        setMessage(m)
    }, [setMessage])
    return (
        <View style={styles.messageContainer}>
            <Icon size={50} style={{ marginRight: 20, marginTop: 10 }} {...message.icon}></Icon>
            <View >
                <ModeText style={[mainStyles.title, { marginBottom: 1 }]}>
                    {message.text}
                </ModeText>
                <Text style={mainStyles.subtitle}>{user.name}</Text>
            </View>
        </View>)
}
export default User;