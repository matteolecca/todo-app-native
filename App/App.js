import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './screens/Auth/Auth';
import { AuthContext } from './hooks/auth-hook'
import { useContext } from 'react';
import User from './screens/User/User';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import BottomBar from './components/BottomBar/BottomBar'
import Projects from './screens/Projects/Projects';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar,  } from 'react-native'

const App = () => {
    const Drawer = createBottomTabNavigator();
    const authContext = useContext(AuthContext)

    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' />
            <Drawer.Navigator 
            tabBar={props => <BottomBar  {...props} />} 
            initialRouteName={authContext.auth ? "projects" : 'auth'}>
                {
                    authContext.auth ?
                        <React.Fragment>
                            <Drawer.Screen name="projects" component={Projects} />
                            <Drawer.Screen name="user" component={User} />
                            <Drawer.Screen name="settings" component={SettingsScreen} />
                        </React.Fragment>
                        :
                        <Drawer.Screen name="auth" component={Auth} />
                }
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App