import { Dimensions, StyleSheet } from 'react-native'
import {getColorTheme} from '../../constants/colors'
const colors = getColorTheme()
const screen = Dimensions.get('window')
export default StyleSheet.create({
    titleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        marginBottom : 20
    },
    title : {
        color : colors.mainColor,
        fontSize : 30,
        textTransform : 'capitalize',
    },
    emptyContainer : {
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1

    },
    emptyImage : {
        width : screen.width * .8,
        height : screen.width * .5,
    },
    projectTitle : {
        color : colors.mainColor
    }
    
})