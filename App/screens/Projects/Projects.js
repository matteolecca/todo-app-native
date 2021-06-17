import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import mainStyles from '../../App.styles'
import styles from './Projects.styles.js'
import { createStackNavigator } from '@react-navigation/stack';
import projectsHook from '../../hooks/projects-hook'
import { useEffect } from 'react';
import ProjectsList from '../ProjectList/ProjectList';
import { ScrollView } from 'react-native-gesture-handler';
import BottomMenu from '../BottomMenu/BottomMenu'
const Container = () => {
    const [modalOpened, openModal] = useState(false)
    const Stack = createStackNavigator();
    return (
        <>
            <BottomMenu opened={modalOpened} open={openModal} />
            <Stack.Navigator>
                <Stack.Screen
                    options={
                        {
                            title: '',
                            headerStyle: styles.header,
                            headerTintColor: styles.headerTintColor.color,
                            headerRight: () => <Button onPress={()=>openModal(true)} buttonStyle={{ backgroundColor: 'transparent', marginRight: 10 }} title='options' />
                        }}
                    name="proj"
                    component={Projects}
                />
                <Stack.Screen options={{ title: 'todo', headerStyle: styles.header, headerTintColor: styles.headerTintColor.color }} name="projectsList" component={ProjectsList} />
            </Stack.Navigator>
            {modalOpened ? <View style={{position : 'absolute', height : 1000, backgroundColor : 'rgba(0,0,0,0.5)', top : 0, left : 0, right : 0, bottom : 0}}></View> : null}
            </>
    )
}
const Projects = ({ navigation, }) => {
    const { loading, projects, getProjects } = projectsHook()

    useEffect(() => {
        getProjects()
    }, [getProjects])

    return (
        <View style={[mainStyles.container,]}>
            <View style={mainStyles.screen}>
                <View>
                    <Project navigation={navigation} defaultProject={true} title='important' color='#f05633' type='feather' name='tag' />
                    <Project navigation={navigation} defaultProject={true} title='scheduled' color='#b6ee56' type='feather' name='calendar' />
                    <Project navigation={navigation} defaultProject={true} title='today' color='#f44336' type='feather' name='calendar' />
                </View>
                <Text style={[mainStyles.title, { marginTop: 25 }]}>My List</Text>
                <ScrollView>
                    {
                        loading ? <ActivityIndicator /> : projects ? projects.map(p => <Project key={p.ID} navigation={navigation} title={p.name} color={p.color} ID={p.ID} type='material-icons' name='circle' />) : null
                    }
                </ScrollView>
            </View>
        </View>
    );
};


const Project = props => {
    const { ID, title, color, navigation, type, name, defaultProject } = props
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('projectsList',
                { open: console.log('dio'), title: title, ID: ID, defaultProject: defaultProject, icon: { title: title, color: color, type: type, name: name } }
            )}
            style={[mainStyles.shadowbox, styles.project]}>
            <Icon {...props} />
            <Text style={styles.projectText}>{title}</Text>

        </TouchableOpacity>
    )
}

export default Container;