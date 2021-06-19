import React, { useContext, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import mainStyles from '../../App.styles'
import styles from './Projects.styles.js'
import { createStackNavigator } from '@react-navigation/stack';
import projectsHook from '../../hooks/projects-hook'
import { useEffect } from 'react';
import ProjectsList from '../ProjectList/ProjectList';
import { ScrollView } from 'react-native-gesture-handler';
import BottomMenu from '../BottomMenu/BottomMenu'
import { AuthContext } from '../../hooks/auth-hook'
import { ModeView, ModeText, ModeButton } from '../../MainComponents/MainComponents'
import { globalColors } from '../../constants/colors';
import AddTodo from '../AddTodo/AddTodo';
import UserProjects from './Project/Project'
const Container = () => {
    const context = useContext(AuthContext)
    const [modalOpened, openModal] = useState(false)
    const Stack = createStackNavigator();
    const { colorScheme } = context

    const openSettingsHandler = () => {
        openModal(!modalOpened)
        context.openModal(!modalOpened)
    }

    return (
        <>
            <BottomMenu opened={modalOpened} open={openSettingsHandler} />
            <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'transparent' }, headerStyle: { backgroundColor: 'transparent' }, headerTintColor: colorScheme.mainColor }}>
                <Stack.Screen
                    options={
                        {
                            title: '',
                            headerRight: () => <ModeButton onPress={openSettingsHandler} style={{ marginRight: 20 }}>
                                <Icon color={globalColors.appColor} type='feather' name='settings' />
                            </ModeButton>
                        }}
                    name="proj"
                    component={Projects}
                />
                <Stack.Screen name="projectsList" component={ProjectsList} />
            </Stack.Navigator>
        </>
    )
}
const Projects = ({ navigation, }) => {

    return (
        <View style={[mainStyles.screen]}>
            <>
                <ModeText style={[mainStyles.title, { margin: 10 }]}>Todos</ModeText>
                <View>
                    <Project navigation={navigation} defaultProject={true} title='important' color='#f05633' type='feather' name='tag' />
                    <Project navigation={navigation} defaultProject={true} title='scheduled' color='#b6ee56' type='feather' name='calendar' />
                    <Project navigation={navigation} defaultProject={true} title='today' color='#f44336' type='feather' name='calendar' />
                </View>
             
                <ScrollView>
                    <UserProjects navigation={navigation} />
                </ScrollView>
            </>
        </View>
    );
};


const Project = props => {
    const { ID, title, color, navigation, type, name, defaultProject } = props
    return (
        <ModeButton
            onPress={() => navigation.navigate('projectsList',
                { title: title, ID: ID, defaultProject: defaultProject, icon: { title: title, color: color, type: type, name: name } }
            )}
            style={[styles.project, mainStyles.shadowbox]}>
            <Icon {...props} />
            <ModeText style={styles.projectText}>{title}</ModeText>

        </ModeButton>
    )
}

export default Container;