import { Appearance } from 'react-native'
export const getColorTheme =  ()=>{
    return Appearance.getColorScheme() === 'dark' ? darkColors :  lightColors
}

export const darkColors = {
    mainColor : '#fff',
    mainBackground : '#333',
    secondaryBackground : 'rgb(73, 73, 73)',
    tertiaryBackground : 'rgb(80, 80, 80)',
    appColor : '#f05633'
}
export const lightColors = {
    mainColor : '#333',
    mainBackground : '#fff',
    secondaryBackground : 'rgb(250, 250, 250)',
    tertiaryBackground : 'rgb(200, 200, 200)',
    appColor : '#f05633'

}

export default {
    headerBackground : '#fff',
    mainBackground : '#f05633',
    mainColor : '#ccc',
    constrastColor : '#fff',
    separatorColor : 'rgba(200,200,200,0.5)',
    opacityBackground : '#f05633'
}

export const colorPickerColors = [
    {ID : 0, color : '#A3D16EFF'},
    {ID : 1, color : '#EF8C56FF'},
    {ID : 2, color : '#ED6C59FF'},
    {ID : 3, color : 'rgb(221, 214, 67)'},
    {ID : 4, color : '#DE789DFF'},
    {ID : 5, color : '#7FA6F8FF'}]