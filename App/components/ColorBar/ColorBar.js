import React from 'react'
import { useState } from 'react';
import { View, Text, } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { colorPickerColors } from '../../constants/colors'
import Selector from '../Selector/Selector';
import styles from './ColorBar.styles'
const ColorBar = ({setColor}) => {
    const [ colorChecked, checkColor ] = useState(colorPickerColors[0].color)

    useEffect(()=>{
        setColor( colorChecked, 'color')
    },[colorChecked])
    return (
        <View style={styles.colorBar}>
            <Text>Pick a color</Text>
            {colorPickerColors.map(c=><Selector onPress={()=>checkColor(c.color)} key={c.ID} color={c.color} checked={c.color === colorChecked} /> )}
        </View>
    );
};

export default ColorBar;


//git clean --force && git reset --hard