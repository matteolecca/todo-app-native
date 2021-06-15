import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import styles from './Topbar.styles'
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Topbar = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.topbar}>
            <View style={styles.container}>
                <Icon  onPress={()=>navigation.toggleDrawer()} color="#333" name='menu' />
                <Icon  color="#333" name='person' />
            </View>
        </SafeAreaView>
    );
};


export default Topbar;