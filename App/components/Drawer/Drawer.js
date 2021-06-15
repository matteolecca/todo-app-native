import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import styles from './Drawer.style'
import { Image, View } from 'react-native';
const Drawer = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/app-logo-web.png')} />
            <DrawerItemList
                {...props}
                labelStyle={{
                    padding : 5
                }}
            />
           
        </DrawerContentScrollView>
    );
};

export default Drawer;