import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    loadingPage : {
        alignItems : 'center', 
        justifyContent : 'center',
        backgroundColor : '#fff',
        flex : 1
    },
    image : {
        width : screen.width * 0.4,
        height : screen.height * 0.3
    },
    spinner:{
        color : colors.mainBackground,
    }
    
})