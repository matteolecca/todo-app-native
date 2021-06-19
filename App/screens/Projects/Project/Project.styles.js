import { Dimensions, StyleSheet } from 'react-native'
import { globalColors } from '../../../constants/colors'
const screen = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(200,200,200,0.2)',
        borderRadius: 10,
        marginBottom: 10
    },
    pressable: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        height: screen.height * .07,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textTransform: 'capitalize',
        marginLeft: 10
    },
    trash: {
        backgroundColor: globalColors.appColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: 75,
    },
    listTopBar : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : screen.height * .05,
    }
    
})