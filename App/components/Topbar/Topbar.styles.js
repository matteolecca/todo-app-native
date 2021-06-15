import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import { topbarHeight } from '../../constants/mainSizes'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    topbar : {
        height : topbarHeight,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#000',
    },
    container : {
        width : screen.width * 0.9,
        alignItems : 'flex-start',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})