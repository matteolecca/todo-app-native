import { Dimensions, StyleSheet } from 'react-native'
import { getColorTheme, globalColors } from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        width: screen.width,
        borderRadius : 20
    },
    topbar : {
        flexDirection : 'row',
        justifyContent : 'flex-end',
        borderBottomWidth : StyleSheet.hairlineWidth,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 10,
        paddingBottom : 10,
        borderBottomColor : globalColors.lineColor

    },
    title : {
        fontSize : screen.width * .08,
        fontWeight : '700'
    },
    menuContainer : {
        margin : screen.width * .05
    },
    itemsContainer : {
        marginTop : screen.height * .05
    },  
    item : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderColor : globalColors.lineColor,
        paddingBottom : screen.height * .02,
        paddingTop : screen.height * .02,
    },
    noBorder:  {
        borderBottomWidth : 0
    }

})