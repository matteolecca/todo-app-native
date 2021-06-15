import { StyleSheet, Dimensions } from 'react-native'
import colors from './constants/colors'
import {screenpad} from './constants/mainSizes'
import { topbarHeight } from './constants/mainSizes'
const screen = Dimensions.get('window')

export default StyleSheet.create({
    drawerStyle: {
        width: screen.width,
        top: topbarHeight,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 20,
    },
    headerStyle: {
        backgroundColor: colors.headerBackground,
        shadowOffset: { height: 0, width: 0 },
    },
    container: {
        flex: 1,
        backgroundColor: colors.headerBackground,
        paddingTop : screen.height * .05
    },
    screen: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingLeft: screenpad,
        paddingRight: screenpad,
        paddingTop: screenpad,
    },
    shadowbox: {
        backgroundColor : '#fff',
        shadowColor: "#000",
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
        fontWeight : 'bold',
        fontSize : screen.width * .1,
        color : '#333',
        marginBottom : screen.height * 0.03,
        textTransform : 'capitalize'
    }

})
