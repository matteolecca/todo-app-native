import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const colors = getColorTheme()
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        width : '100%',
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        borderRadius : 10,
        borderColor : colors.mainColor,
        borderWidth : StyleSheet.hairlineWidth,
        backgroundColor : colors.secondaryBackground,
        marginBottom : 10,
        marginTop : 10,
    },
    label : {
        color : colors.mainColor
    },
    input : {
        padding : 10,
        flex : 1,
        height : 50,
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        color : colors.mainColor
    },
    iconContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 50,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
        borderRightWidth : 0,
        padding : 10,
        borderRightColor : colors.mainColor,
        backgroundColor : colors.secondaryBackground,
    },
    disabled : {
        backgroundColor : '#ccc'
    },
    invalid : {
        borderWidth : 1, 
        borderColor : colors.mainBackground
    }
   
})