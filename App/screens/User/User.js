import React, { useContext } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Burger from '../../components/Topbar/Burger';
import mainStyles from '../../App.styles'
import { AuthContext } from '../../hooks/auth-hook'
import { Icon } from 'react-native-elements';
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react';
import LogoutButton from '../../components/Button/LogoutButton'
const icons = {
    morning: { text: 'Good morning,', icon: { color: '#ffc905', type: 'feather', name: 'sun' } },
    evening: { text: 'Good evening,', icon: { color: '#ff4d00', type: 'feather', name: 'sunset' } },
    night: { text: 'Good night,', icon: { color: '#000066', type: 'feather', name: 'moon' } },
}
const User = props => {
    const context = useContext(AuthContext)
    const [message, setMessage] = useState('')
    const { user } = context

    useEffect(() => {
        const time = new Date().getHours()
        const m = time > 6 && time < 13 ? icons.morning : time >= 13 && time < 20 ? icons.evening : icons.night
        setMessage(m)
    }, [setMessage])
    return (
        <View style={mainStyles.container}>
            <View style={[mainStyles.screen, { marginTop: 30 }]}>
                <View style={{flexDirection : 'row',}}>
                <Icon size={50} style={{marginRight : 20, marginTop : 10}} {...message.icon}></Icon>
                    <View >
                        <Text style={[mainStyles.title, { marginBottom: 1 }]}>
                            {message.text}
                        </Text>
                        <Text style={mainStyles.subtitle}>{user.name}</Text>
                    </View>
                </View>
                <LogoutButton/>
            </View>
        </View>
    );
};

export default User;