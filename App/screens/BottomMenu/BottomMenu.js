import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Button, StyleSheet } from 'react-native';
import ModalContainer from '../../components/Modal/Modal';
import styles from './BottomMenu.styles'
import ColorTheme from '../../components/ColorTheme/ColorTheme'
import { ModeText, ModeView, ModeButton } from '../../MainComponents/MainComponents';
import { AuthContext } from '../../hooks/auth-hook';
import { removeLocalData } from '../../util/storeLocal';
import {  Icon } from 'react-native-elements';
import { globalColors } from '../../constants/colors';
const BottomMenu = props => {
    const context = useContext(AuthContext)

    const logoutHandler = async () =>{
        console.log(await removeLocalData('token'))
        context.setAuth(false)
        context.openModal(false)
    }
    const { open } = props
    return (
        <ModalContainer {...props}>
            <ModeView style={styles.container}>
                <View style={styles.topbar}>
                    <ModeButton  onPress={open} ><Icon name='close' color={globalColors.appColor}/></ModeButton>
                </View>
                <View style={styles.menuContainer}>
                    <ModeText style={styles.title}>Settings</ModeText>
                    <View style={styles.itemsContainer}>
                        <View style={[styles.item, { flexDirection : 'column' }]}>
                            <ModeText style={styles.text}>Mode</ModeText>
                            <ColorTheme />
                        </View>
                        <View style={[styles.item, styles.noBorder]}>
                            <ModeButton onPress={logoutHandler}><Text style={{color : globalColors.appColor}}>Logout</Text></ModeButton>
                        </View>
                    </View>
                </View>
            </ModeView>
        </ModalContainer>
    );
};

export default BottomMenu;