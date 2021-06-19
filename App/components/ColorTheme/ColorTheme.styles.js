import { Dimensions, StyleSheet } from 'react-native'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container : {
        width : '100%', 
        height : screen.height * .2,
       flexDirection : 'row',
       justifyContent : 'space-between',
       marginTop : 10
    },
    modeContainer : {
        width : '45%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'space-around',
        borderRadius : 20,
    }
   
})