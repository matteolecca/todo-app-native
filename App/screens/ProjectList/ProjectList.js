import FloatingButton from '../../components/Button/FloatingButton'
import React from 'react';
import { View, Text, _ScrollView, ScrollView, ActivityIndicator, Image } from 'react-native';
import mainStyles from '../../App.styles'
import Selector from '../../components/Selector/Selector'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import styles from './ProjectList.styles'
import todosHook from '../../hooks/todos-hook'
import { useEffect } from 'react';
import { useState } from 'react';
import AddProject from '../AddProject/AddProject';
import { AuthContext } from '../../hooks/auth-hook'
import { useContext } from 'react';
const ProjectList = (props) => {
    const context = useContext(AuthContext)
    const { navigation, route } = props
    const { ID, title, icon, defaultProject } = route.params

    const { ...data } = todosHook()
    const { todos, loading, gettodos, inserted, deleteTodo } = data
    const [modalOpened, openModal] = useState(false)

    useEffect(() => {
        context.hideBar(true)
        return () => context.hideBar(false)
    }, [context.hideBar])

    useEffect(() => {
        gettodos(ID, defaultProject ? title : null)
    }, [title, ID])

    return (
        <>
            <View style={[mainStyles.container]}>
                <View style={mainStyles.screen}>
                    <View style={styles.titleContainer}>
                        <Icon onPress={() => navigation.goBack()} style={{ marginRight: 10 }} {...icon} />
                        <Text style={[styles.title, { color: icon.color }]}>{title}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        {
                            loading ? <ActivityIndicator style={{ alignSelf: 'center' }} /> : todos ? todos.length === 0 ? <EmptyContainer /> : <Todos projectID={ID} deleteTodo={deleteTodo} todos={todos} /> : null
                        }
                    </View>
                    <FloatingButton onPress={() => openModal(true)} />
                    <AddProject  {...route} {...data} opened={modalOpened} open={openModal} />
                </View>
            </View>
            {modalOpened ? <View style={{ position: 'absolute', height: 1000, backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, right: 0, bottom: 0 }}></View> : null}
        </>
    );
};

const Todos = ({ todos, deleteTodo, projectID }) => {
    return (
        <ScrollView indicatorStyle='white' style={{ flex: 1 }}>
            {
                todos.map(p => <Project projectID={projectID} deleteTodo={deleteTodo} key={p.ID} {...p} />)
            }
        </ScrollView>
    )
}
const EmptyContainer = () => {
    return (
        <View style={styles.emptyContainer}>
            <Image style={styles.emptyImage} resizeMode="contain" source={require('../../assets/images/empty-img.png')} />
            <Text style={{ color: '#ccc' }}>There is nothing here... Start adding a todo</Text>
        </View>

    )
}
const Project = props => {
    const { ID, color, date, important, title, deleteTodo, projectID } = props
    const [checked, check] = useState(false)
    const pressHandler = () => {
        check(true)
        deleteTodo(projectID, ID)
    }
    return (
        <View style={{
            padding: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Selector checked={checked} onPress={pressHandler} color={color} />
                <Text style={styles.projectTitle}>{title}</Text>
            </View>
            {date ? <Icon color='#f05633' type='feather' name='calendar' /> : null}

        </View>
    )
}

export default ProjectList;