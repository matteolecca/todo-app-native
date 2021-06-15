import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerCustom from './components/Drawer/Drawer'

import Auth from './screens/Auth/Auth';
import { AuthContext } from './hooks/auth-hook'
import { useContext } from 'react';
import styles from './App.styles'
import User from './screens/User/User';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import BottomBar from './components/BottomBar/BottomBar'
import Projects from './screens/Projects/Projects';
import mainStyles from './App.styles'
import ProjectList from './screens/ProjectList/ProjectList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StatusBar } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';

const App = () => {
    const Drawer = createBottomTabNavigator();
    const authContext = useContext(AuthContext)

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' />
            <Drawer.Navigator
                tabBar={props =>  <BottomBar  {...props} />}
                initialRouteName="projects">
                {
                    !authContext.auth ?
                        <React.Fragment>
                            <Drawer.Screen
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color, size }) => (
                                  <Icon type='feather' name="home" color={color} size={size} />
                                ),
                              }}
                                name="projects" component={Projects} />
                            <Drawer.Screen options={{ cardStyleInterpolator: forFade }}
                                name="user" component={User} />
                            <Drawer.Screen options={{ cardStyleInterpolator: forFade, }}
                                name="projectsList" component={ProjectList} />
                            <Drawer.Screen options={{ cardStyleInterpolator: forFade,  }}
                                name="settings" component={SettingsScreen} />
                        </React.Fragment>
                        :
                        <Drawer.Screen name="auth" component={Auth} />
                }
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App