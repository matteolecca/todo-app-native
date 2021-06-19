import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    selector : {
        width :screen.width * .06,
        height : screen.width * .06,
        borderWidth : 2,
        borderRadius : screen.width * .03,
        marginRight : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    innerSelector:{
        width :screen.width * .04,
        height : screen.width * .04,
        borderRadius : screen.width * .02,
    },
    backgroundColor : {
        color : 'transparent'
    }
    
})