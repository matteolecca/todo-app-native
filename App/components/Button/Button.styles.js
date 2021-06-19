import  { Dimensions, StyleSheet } from 'react-native'
const screen = Dimensions.get('window')
import { globalColors } from '../../constants/colors'
export default StyleSheet.create({
    button : {
        alignItems : 'center',
        justifyContent : 'center',
        minHeight : screen.height * .05,
        minWidth  : screen.width * .2,
        borderRadius : 10,
        flex:  1,
        maxWidth : screen.width * .8,
        backgroundColor : globalColors.appColor
    },
    text : {
        color : '#fff'
    },
    disabled : {
        backgroundColor : '#ccc'
    },
    floatingButton : {
        width : screen.width * .15,
        height : screen.width * .15,
        bottom : 25,
        left : screen.width - screen.width * .25,
        borderRadius : screen.width * .125,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : globalColors.floatingButtonBackground

    }

})