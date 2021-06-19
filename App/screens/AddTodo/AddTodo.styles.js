import { Dimensions, StyleSheet } from 'react-native'
const screen = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        minHeight : screen.height * .4,
        width : screen.width,
        flexDirection: 'column',
         padding : 20, 
         borderRadius : 20 
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        marginBottom : 25,
        marginTop : 50,
        paddingTop : 25
    },
    button: {
        minWidth: 50,
        marginLeft : 10,
        padding : 10,
        borderRadius : 5,
    },
    stateContainer : {
        height : screen.height * .4,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        width : screen.width,
        borderRadius : 20
        
    },
    confirmMessage : { fontWeight: 'bold', fontSize: 30, margin: 20, },
    title : {
        fontSize : screen.width * .05,
        fontWeight : '700'
    }

})