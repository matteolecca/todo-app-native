import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './screens/Auth/Auth';
import { AuthContext } from './hooks/auth-hook'
import { useContext } from 'react';
import User from './screens/User/User';
import BottomBar from './components/BottomBar/BottomBar'
import Projects from './screens/Projects/Projects';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View } from 'react-native'

const App = () => {
    const Drawer = createBottomTabNavigator();
    const authContext = useContext(AuthContext)
    const { colorScheme } = authContext
    return (
        <NavigationContainer>
            <StatusBar barStyle={colorScheme.scheme === 'dark' ? 'light-content' : 'dark-content'} />
            <Drawer.Navigator
                sceneContainerStyle={{
                    backgroundColor: colorScheme.mainBackground
                }}
                tabBar={props => authContext.auth && <BottomBar  {...props} />}
                initialRouteName={authContext.auth ? "projects" : 'login'}>
                {
                    authContext.auth ?
                        <>
                            <Drawer.Screen name="projects" component={Projects} />
                            <Drawer.Screen name="user" component={User} />
                        </>
                        :
                        <>
                            <Drawer.Screen name="login" component={Auth} initialParams={{ context: 'login' }} />
                            <Drawer.Screen name="signup" component={Auth} initialParams={{ context: 'signup' }} />
                        </>
                }
            </Drawer.Navigator>
            {authContext.modalOpened ? <View style={{ position: 'absolute', height: 1000, width: 1000, flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, right: 0, bottom: 0 }}></View> : null}
        </NavigationContainer>

    );
};

export default App