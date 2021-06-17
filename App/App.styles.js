import { StyleSheet, Dimensions } from 'react-native'
import { getColorTheme } from './constants/colors'
import {screenpad} from './constants/mainSizes'
import { topbarHeight } from './constants/mainSizes'
const screen = Dimensions.get('window')
const colors = getColorTheme()
export default StyleSheet.create({
    drawerStyle: {
        width: screen.width,
        top: topbarHeight,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 20,
    },
    headerStyle: {
        shadowOffset: { height: 0, width: 0 },
    },
    container: {
        backgroundColor : colors.mainBackground,
        color : colors.mainColor,
        flex: 1,
        paddingTop : screen.height * .02
    },
    screen: {
        backgroundColor : colors.mainBackground,
        color : colors.mainColor,
        flex: 1,
        paddingLeft: screenpad,
        paddingRight: screenpad,
        paddingTop: 0,
    },
    shadowbox: {
        backgroundColor : colors.secondaryBackground,
        color : colors.mainColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius : 10,
        padding : 10
    },
    title:{
        color : colors.mainColor,
        fontWeight : 'bold',
        fontSize : screen.width * .07,
        marginBottom : screen.height * 0.03,
        textTransform : 'capitalize'
    },
    subtitle:{
        color : colors.mainColor,
        fontWeight : 'bold',
        fontSize : screen.width * .05,
        color : 'rgb(150, 150, 150)',
        marginBottom : screen.height * 0.03,
        textTransform : 'capitalize'
    }

})
