import { StyleSheet, Dimensions } from 'react-native'
import { globalColors } from './constants/colors'
import { screenpad } from './constants/mainSizes'
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
        shadowOffset: { height: 0, width: 0 },
    },
    container: {
        flex: 1,
    },
    screen: {
        backgroundColor: 'transparent',
        flex: 1,
        paddingLeft: screenpad,
        paddingRight: screenpad,
        paddingTop: 0,
    },
    shadowbox: {
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 0,
        shadowColor : 'rgb(0,0,0)',
    },
    title: {
        fontWeight: 'bold',
        fontSize: screen.width * .07,
        textTransform: 'capitalize'
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: screen.width * .05,
        color: 'rgb(150, 150, 150)',
        marginBottom: screen.height * 0.03,
        textTransform: 'capitalize'
    },


})
