import { Dimensions, StyleSheet } from 'react-native'
import {globalColors} from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    messageContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : screen.height * .05
    },
    container : {
        width : '80%',
        alignSelf:  'center',
        marginTop : screen.height * .05
    },
    userData : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderBottomColor : globalColors.lineColor,
        paddingTop : screen.height * .01,
        paddingBottom : screen.height * .01,
    },
    dataTitle : {
        fontWeight : 'bold',
        textTransform : 'uppercase'
    }
    
})