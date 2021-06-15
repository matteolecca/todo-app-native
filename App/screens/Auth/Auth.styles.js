import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    home : {
        alignItems : 'center', 
        justifyContent : 'center',
        backgroundColor : '#fff',
        flex : 1,
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
    }
    
})