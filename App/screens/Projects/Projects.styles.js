import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    project : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        height : screen.height * 0.07,
        marginBottom : 10,
        marginLeft : 5,
        marginRight : 5,
        padding : 10,
        borderRadius : 10
    },
    image : {
        marginTop : 20,
        width : screen.width * .2,
        height : screen.height * .08,
    },
    projectText :{ 
        fontSize: 20, 
        textTransform: 'capitalize', 
        marginLeft: 10 
    },
    header : {
       shadowColor : 'transparent',
    },
  
})