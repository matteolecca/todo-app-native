import { Dimensions, StyleSheet } from 'react-native'
const screen = Dimensions.get('window')
import { getColorTheme } from '../../constants/colors'
const colors = getColorTheme()
export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        margin: 0,
        backgroundColor: colors.mainBackground,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 25,
        paddingBottom: 10,
        width: screen.width,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});