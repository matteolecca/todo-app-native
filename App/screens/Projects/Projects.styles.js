import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    project : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        height : screen.height * 0.07,
        marginBottom : 10
    },
    imageContainer:{
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',
        width : screen.width * .9,
        marginBottom : 20
    },
    image : {
        width : screen.width * .3,
        height : screen.height * .1,
    }
    
})