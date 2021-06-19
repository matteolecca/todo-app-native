import { Dimensions, StyleSheet } from 'react-native'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    titleContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor : 'transparent',
        marginBottom : 20,
        marginTop : 20,
    },
    titleItem : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10
    },
    title : {
        fontSize : 30,
        textTransform : 'capitalize',
    },
    emptyContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        height : screen.height * .5,

    },
    emptyImage : {
        width : screen.width * .8,
        height : screen.height *.4,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center'
    },
   
})