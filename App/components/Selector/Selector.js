import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './Selector.style'

const Selector = props => {
    const { color, checked, onPress } = props
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.selector, { 
            borderColor : color,
        }]}>
            <View style={[styles.innerSelector, { backgroundColor : checked ?  color : '#fff'}]}>
            </View>
        </TouchableOpacity>
    );
};

export default Selector;

