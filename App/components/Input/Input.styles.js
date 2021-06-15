import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        width : screen.width * 0.8,
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        borderRadius : 10,
        borderColor : 'rgba(200,200,200,0.5)',
        borderWidth : StyleSheet.hairlineWidth,
        backgroundColor : '#ededed',
        margin :10,
    },
    label : {
        color : '#333'
    },
    input : {
        padding : 10,
        flex : 1,
        height : 50,
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        color : '#333'
    },
    iconContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 50,
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
        borderRightWidth : 0,
        padding : 10,
        borderRightColor : '#333',
        backgroundColor : '#ededed',
    },
    disabled : {
        backgroundColor : '#ccc'
    },
    invalid : {
        borderWidth : 1, 
        borderColor : colors.mainBackground
    }
   
})