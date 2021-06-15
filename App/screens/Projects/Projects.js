import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import mainStyles from '../../App.styles'
import styles from './Projects.styles.js'

import projectsHook from '../../hooks/projects-hook'
import { useEffect } from 'react';

const Projects = ({ navigation }) => {
    const { loading, projects, getProjects } = projectsHook()

    useEffect(() => {
        getProjects()
    }, [getProjects])

    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.screen}>
                    <View style={styles.imageContainer}>
                        <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/app-logo-web.png')} />
                    </View>
                <View>
                    <Project navigation={navigation} title='important' color='#f05633' type='feather' name='tag' />
                    <Project navigation={navigation} title='scheduled' color='#b6ee56' type='feather' name='calendar' />
                    <Project navigation={navigation} title='today' color='#f44336' type='feather' name='calendar' />
                </View>
                <Text style={[mainStyles.title, { marginTop: 50 }]}>My List</Text>
                <View>
                    {
                        loading ? <ActivityIndicator /> : projects ? projects.map(p => <Project key={p.ID} navigation={navigation} title={p.name} color={p.color} ID={p.ID} type='feather' name='circle' />) : null
                    }
                </View>
            </View>
        </View>
    );
};


const Project = props => {
    const { ID , title, color, navigation, type, name } = props
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('projectsList',
                { title: title, ID: ID, icon: { title: title, color: color, type: type, name: name } }
            )}
            style={[mainStyles.shadowbox, styles.project]}>

            <Icon
                iconStyle={{
                }} {...props} />
            <Text style={{ fontSize: 20, textTransform: 'capitalize', marginLeft: 10 }}>{title}</Text>

        </TouchableOpacity>
    )
}

export default Projects;