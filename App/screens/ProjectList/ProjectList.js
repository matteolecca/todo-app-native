import FloatingButton from '../../components/Button/FloatingButton'
import React from 'react';
import { View, Text, _ScrollView, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import mainStyles from '../../App.styles'
import Selector from '../../components/Selector/Selector'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import styles from './ProjectList.styles'
import pHook from '../../hooks/projects-hook'
import { useEffect } from 'react';
import ModalContainer from '../../components/Modal/Modal';
import { useState } from 'react';
import AddProject from '../AddProject/AddProject';
const ProjectList = (props) => {
    const { navigation, route } = props
    const { todos, loading, getProjects, gettodos } = pHook()
    const [ modalOpened, openModal ] = useState(false)

    useEffect(() => {
        gettodos(route.params.ID, route.params.title)
    }, [route.params.title, route.params.ID])

    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.screen}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon size={30} type='feather' name='arrow-left' />
                    </TouchableOpacity>
                    <Text style={[mainStyles.title, { marginBottom: 0 }]}>Todos</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Icon onPress={() => navigation.goBack()} style={{ marginRight: 10 }} {...route.params.icon} />
                    <Text style={[styles.title, { color: route.params.icon.color }]}>{route.params.title}</Text>
                </View>
                <ScrollView indicatorStyle='white' style={{ flex: 1 }}>
                    {
                        loading ? <ActivityIndicator /> :
                            todos ? todos.map(p => <Project key={p.ID} {...p} />) : null
                    }
                </ScrollView>
                <FloatingButton onPress={()=>openModal(true)} />
                <AddProject opened={modalOpened} open={openModal}/>
            </View>
        </View>
    );
};

const Project = props => {
    const { ID, color, date, important, title, todolistTitle } = props
    return (
        <View style={{
            padding: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Selector color={color} />
            <Text
                style={{ color: '#333' }}
            >{title}</Text>
        </View>
    )
}

export default ProjectList;