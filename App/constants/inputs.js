import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export const  loginInputs = {
    email :  {
         ID: 0,
         value: '',
         valid : false,
         placeholder: 'Email',
         type: 'email',
         secureTextEntry: false,
         keyboardType: 'email-address',
         icon: <MaterialCommunityIcons  name="email-outline" size={24} />
     },
     password : {
         ID: 1,
         value: '',
         valid : false,
         placeholder: 'Password',
         type: 'password',
         secureTextEntry: true,
         icon: <Ionicons  name="ios-key-outline" size={24} color="black" />
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
     password : {
         ID: 1,
         value: '',
         valid : false,
         placeholder: 'Password',
         type: 'password',
         secureTextEntry: true,
         icon: <Ionicons  name="ios-key-outline" size={24} color="black" />
     },
}