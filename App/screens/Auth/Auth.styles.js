import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container : {
        alignItems : 'center', 
        justifyContent : 'center',
        flex : 1,
    },
    form : {
        alignItems : 'center',
        width : '90%'
    },
    image : {
        width : screen.width * 0.4,
        height : screen.height * 0.3
    },
    title: {
        fontSize : 30,
        fontWeight : '700',
        color : '#fff',
        margin : 20,
        marginTop : 0
    },
    icon : {
    },
    loadingPage : {
        height : screen.height,
        alignItems : 'center', 
        justifyContent : 'center'
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    }
    
})