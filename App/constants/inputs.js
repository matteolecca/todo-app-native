import React from 'react'
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { globalColors } from './colors';
export const  loginInputs = {
    email :  {
         ID: 0,
         value: '',
         valid : false,
         placeholder: 'Email',
         type: 'email',
         secureTextEntry: false,
         keyboardType: 'email-address',
         icon: <MaterialCommunityIcons color={globalColors.appColor}  name="email-outline" size={24} />
     },
     password : {
         ID: 1,
         value: '',
         valid : false,
         placeholder: 'Password',
         type: 'password',
         secureTextEntry: true,
         icon: <Ionicons   name="ios-key-outline" size={24} color={globalColors.appColor} />
     },
}

export const  signupInputs = {
    name :  {
        ID: 0,
        value: '',
        valid : false,
        placeholder: 'Username',
        type: 'text',
        secureTextEntry: false,
        icon: <Icon color={globalColors.appColor}  name="user" type='feather'  size={24} />
    },
    email :  {
         ID: 1,
         value: '',
         valid : false,
         placeholder: 'Email',
         type: 'email',
         secureTextEntry: false,
         keyboardType: 'email-address',
         icon: <Icon color={globalColors.appColor}  name="mail" type='feather'  size={24} />
     },
     password : {
         ID: 2,
         value: '',
         valid : false,
         placeholder: 'Password',
         type: 'password',
         secureTextEntry: true,
         icon: <Icon   name="lock" type='feather' size={24} color={globalColors.appColor} />
     },
     passwordRpt : {
        ID: 3,
        value: '',
        valid : false,
        placeholder: 'Repeat password',
        type: 'password',
        secureTextEntry: true,
        icon: <Icon   name="lock" type='feather' size={24} color={globalColors.appColor} />
    },
}


export const  addProjectInputs = {
    name :  {
         ID: 0,
         value: '',
         valid : false,
         placeholder: 'Project name',
         type: 'text',
         secureTextEntry: false,
         icon: <MaterialCommunityIcons  name="email-outline" size={24} />
     },
     color : {
         value : '#fff',
     },
     date  :{
         value  : null,
     }
}