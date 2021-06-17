import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const colors = getColorTheme()
const screen = Dimensions.get('window')
export default StyleSheet.create({
    image: {
        width: screen.width * 0.4,
        height: screen.height * 0.3
    },
   
    icon: {
        color: colors.mainBackground
    },
    buttonsContainer: {
        backgroundColor : colors.mainBackground,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        marginBottom : 50,
        marginTop : 50,
        paddingTop : 25
    },
    button: {
        minWidth: 50,
        marginLeft : 10,
        padding : 10,
        borderRadius : 5,
        backgroundColor : colors.appColor
    },
    stateContainer : {
        minHeight : screen.height * .2,
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    confirmMessage : { fontWeight: 'bold', fontSize: 30, margin: 20, color : colors.mainColor }
    

})