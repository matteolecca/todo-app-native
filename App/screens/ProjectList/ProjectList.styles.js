import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    titleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        marginBottom : 20
    },
    title : {
        fontSize : 30,
        textTransform : 'capitalize',
    },
    
})