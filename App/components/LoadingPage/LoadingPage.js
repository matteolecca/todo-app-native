import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import styles from './LoadingPage.styles'
const LoadingPage = () => {
    return (
        <View style={styles.loadingPage}>
            <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/app-logo-web.png')} />
            <ActivityIndicator size="large" style={styles.spinner} ></ActivityIndicator>
        </View>
    );
};

export default LoadingPage;