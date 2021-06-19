import { Dimensions, StyleSheet } from 'react-native'
const screen = Dimensions.get('window')
import { globalColors } from '../../constants/colors'
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
        borderRadius : 20,
        shadowOpacity : .2,
        justifyContent : 'space-around',
        flexDirection : 'row',
        alignItems : 'center'
    },
    selectedItem : {
        color : globalColors.appColor
    }
    
})