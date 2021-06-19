import React from 'react'
import { useState } from 'react';
import { View, Text, } from 'react-native';
import { useContext, useEffect } from 'react/cjs/react.development';
import { colorPickerColors } from '../../constants/colors'
import Selector from '../Selector/Selector';
import styles from './ColorBar.styles'
import mainStyles from '../../App.styles'
import { ModeText } from '../../MainComponents/MainComponents';
const ColorBar = ({setColor}) => {
    const [ colorChecked, checkColor ] = useState(colorPickerColors[0].color)
  
    useEffect(()=>{
        setColor ? setColor( colorChecked, 'color') : ()=>{}
    },[colorChecked, setColor])
    
    return (
        <View style={styles.colorBar}>
            <ModeText >Pick a color</ModeText>
            {colorPickerColors.map(c=><Selector onPress={()=>checkColor(c.color)} key={c.ID} color={c.color} checked={c.color === colorChecked} /> )}
        </View>
    );
};

export default ColorBar;

