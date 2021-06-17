import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const colors = getColorTheme()
const screen = Dimensions.get('window')
export default StyleSheet.create({
    project : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        height : screen.height * 0.07,
        marginBottom : 10
    },
    image : {
        marginTop : 20,
        width : screen.width * .2,
        height : screen.height * .08,
    },
    projectText :{ 
        color : colors.mainColor,
        fontSize: 20, 
        textTransform: 'capitalize', 
        marginLeft: 10 
    },
    header : {
        backgroundColor : colors.mainBackground,
       shadowColor : 'transparent',
    },
    headerTintColor : {
        color : colors.mainColor
    }
    
})