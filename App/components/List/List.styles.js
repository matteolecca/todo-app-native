import { StyleSheet, Dimensions } from 'react-native'
const height = Dimensions.get('window').height
export default StyleSheet.create({
    listcontainer : {
        margin : 10,
        flex : 1
    },
    listItem : {
        padding : 10,
        borderColor : 'rgba(200,200,200,0.5)',
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderRadius : 5,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    
})