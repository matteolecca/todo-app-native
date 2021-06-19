import { Dimensions, StyleSheet } from 'react-native'
import { globalColors } from '../../constants/colors'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    deleteModal : {
        width : screen.width * .9,
        alignItems : 'center',
        justifyContent : 'space-between',
        borderRadius : 20,
        minHeight : screen.height * .12
    },
    deleteModalTitle : {
        fontWeight : '700',
        justifyContent : 'center',
        alignItems : 'center',
    },
    buttonsContainer : {
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         borderTopWidth : StyleSheet.hairlineWidth,
         borderTopColor : globalColors.lineColor,
    },
    centerView : {
         alignItems : 'center', justifyContent : 'center', flex : 1
    },
    stateContainer : {
        width : screen.width * .9,
        minHeight : screen.height * .2,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        borderRadius : 20
    },
    confirmMessage : { fontWeight: 'bold', fontSize: 30, margin: 20, },
    title : {
        fontSize : screen.width * .05,
        fontWeight : '700'
    }
})