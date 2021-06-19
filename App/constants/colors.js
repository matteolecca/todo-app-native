import { Appearance } from 'react-native'
export const getColorTheme =  ()=>{
    return Appearance.getColorScheme() === 'dark' ? darkColors :  lightColors
}

export const darkColors = {
    scheme : 'dark',
    mainColor : '#fff',
    mainBackground : '#333',
    secondaryBackground : 'rgb(73, 73, 73)',
    tertiaryBackground : 'rgb(80, 80, 80)',
    appColor : '#f05633'
}
export const lightColors = {
    scheme : 'light',
    mainColor : '#333',
    mainBackground : '#fff',
    secondaryBackground : 'rgb(250, 250, 250)',
    tertiaryBackground : 'rgb(235, 235, 235)',
    appColor : '#f05633'

}

export const globalColors = {
    appColor : '#f05633',
    floatingButtonBackground : 'rgb(73, 73, 73)',
    lineColor : 'rgba(200,200,200,0.5)'
}

export const colorPickerColors = [
    {ID : 0, color : '#A3D16EFF'},
    {ID : 1, color : '#EF8C56FF'},
    {ID : 2, color : '#ED6C59FF'},
    {ID : 3, color : 'rgb(221, 214, 67)'},
    {ID : 4, color : '#DE789DFF'},
    {ID : 5, color : '#7FA6F8FF'}]