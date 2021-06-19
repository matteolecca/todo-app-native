import React, { useContext } from 'react';
import { Text, Modal, View, StyleSheet, Pressable, Keyboard } from 'react-native'
import styles from './ColorTheme.styles'
import { Icon } from 'react-native-elements';
import Selector from '../Selector/Selector';
import { AuthContext } from '../../hooks/auth-hook';
import { lightColors, darkColors } from '../../constants/colors';
const ModalContainer = props => {
    const context = useContext(AuthContext)
    const { colorScheme, setcolorScheme } = context
    return (
        <View style={styles.container}>
            <View style={[styles.modeContainer,{ backgroundColor : colorScheme.tertiaryBackground}]}>
                <Icon size={50} color='#fff' type='feather' name='sun' />
                <Selector onPress={()=>setcolorScheme(lightColors)} checked={colorScheme.scheme !== 'dark'} color='#fff' />
            </View>
            <View style={[styles.modeContainer,{ backgroundColor : colorScheme.tertiaryBackground}]}>
                <Icon size={50} color='#fff' type='feather' name='moon' />
                <Selector onPress={()=>setcolorScheme(darkColors)} color='#fff' checked={colorScheme.scheme === 'dark'} />
            </View>
        </View>
    );
};

export default ModalContainer;