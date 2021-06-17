import  { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const colors = getColorTheme()
const screen = Dimensions.get('window')
export default StyleSheet.create({
    button : {
        backgroundColor : colors.appColor,
        alignItems : 'center',
        justifyContent : 'center',
        height : 50,
        width : screen.width * 0.8,
        borderRadius : 10,
        margin : 20,
    },
    text : {
        color : '#fff'
    },
    disabled : {
        backgroundColor : '#ccc'
    },
    floatingButton : {
        backgroundColor :colors.secondaryBackground,
        width : screen.width * .15,
        height : screen.width * .15,
        bottom : 25,
        left : screen.width - screen.width * .25,
        borderRadius : screen.width * .125,
        alignItems : 'center',
        justifyContent : 'center',
    }

})