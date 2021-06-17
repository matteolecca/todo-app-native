import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const colors = getColorTheme()
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container : {
        alignItems : 'center', 
        justifyContent : 'center',
        backgroundColor : colors.mainBackground,
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
        color : colors.mainBackground
    },
    loadingPage : {
        backgroundColor : colors.mainBackground,
        height : screen.height,
        alignItems : 'center', 
        justifyContent : 'center'
    }
    
})