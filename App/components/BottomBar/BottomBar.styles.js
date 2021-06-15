import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    bar : {
        position : 'absolute',
        width : screen.width ,
        height : screen.height * .1,
        bottom : screen.height * .05,
        alignItems : 'center',
        justifyContent : 'center'
    },
    container : {
        width : screen.width * .9,
        height : screen.height * .1,
        backgroundColor : '#fff',
        borderRadius : 20,
        shadowOpacity : .2,
        justifyContent : 'space-around',
        flexDirection : 'row',
        alignItems : 'center'
    }
    
})