import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from "react-native-elements";
import styles from './Topbar.styles'
const Burger = ({ navigation, children }) => {
    return (
        <View style={{flex : 1}}>
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Icon
                    iconStyle={styles.burger}
                    onPress={() => navigation.toggleDrawer()}
                    type="ionicon"
                    name={"menu-outline"}
                />
            </View>
            <Text style={styles.title}>Projects</Text>
        </View>
        {children}
        </View>
    );
};

export default Burger;