import { Dimensions, StyleSheet } from 'react-native'
import { globalColors } from '../../constants/colors'
export default StyleSheet.create({
    container:{
        width : '100%',
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        borderRadius : 10,
        borderWidth : StyleSheet.hairlineWidth,
        borderColor : globalColors.lineColor,
        marginBottom : 10,
        marginTop : 10,
    },
    label : {
    },
    input : {
        padding : 10,
        flex : 1,
        height : 50,
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
    },
    iconContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 50,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
        borderRightWidth : 0,
        padding : 10,
    },
    disabled : {
        backgroundColor : '#ccc'
    },
    invalid : {
        borderWidth : 1, 
    }
   
})