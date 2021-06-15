import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('screen')

export default StyleSheet.create({
    item: {
        backgroundColor: colors.mainBackground,
        color : '#fff',
        flex : 1,
        width : screen.width * 0.7
    },
    image: {
        width: screen.width * 0.4,
        height: screen.height * 0.3,
        marginLeft : screen.width * 0.25
    },

})