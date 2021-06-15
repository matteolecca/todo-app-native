import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('screen')

export default StyleSheet.create({
    colorBar: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 25,
        marginBottom : 25
    },
   

})