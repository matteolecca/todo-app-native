import FloatingButton from '../../components/Button/FloatingButton'
import React from 'react';
import { View, Text, _ScrollView, ScrollView, Image, RefreshControl } from 'react-native';
import mainStyles from '../../App.styles'
import Selector from '../../components/Selector/Selector'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import styles from './ProjectList.styles'
import todosHook from '../../hooks/todos-hook'
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../hooks/auth-hook'
import { useContext } from 'react';
import { ModeButton, ModeText, ModeView } from '../../MainComponents/MainComponents';
import AddTodo from '../AddTodo/AddTodo'
import { globalColors } from '../../constants/colors';

const ProjectList = (props) => {
    const context = useContext(AuthContext)
    const { route } = props
    const { ID, title, icon, defaultProject } = route.params
    const { ...data } = todosHook()
    const { datas, loading, getDatas, deleteData } = data
    const [modalOpened, openModal] = useState(false)

    const modalHandler = () => {
        context.openModal(!modalOpened)
        openModal(!modalOpened)
    }

    useEffect(() => {
        context.hideBar(true)
        return () => context.hideBar(false)
    }, [context.hideBar])

    useEffect(() => {
        getDatas(ID, defaultProject ? title : null)
    }, [title, ID])

    return (
        <ModeView style={[mainStyles.screen]}>
            <View style={styles.titleItem}>
                    <Icon style={{ marginRight: 10 }} {...icon} />
                    <Text style={[styles.title, { color: icon.color }]}>{title}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {
                    <Todos refresh={() => getDatas(ID, defaultProject ? title : null)} refreshing={loading} projectID={ID} deleteTodo={deleteData} todos={datas} />
                }
            </View>
            <FloatingButton onPress={modalHandler} />
            <AddTodo  {...route} {...data} opened={modalOpened} open={modalHandler} />
        </ModeView>
    );
};

const Todos = ({ todos, deleteTodo, projectID, refresh, refreshing }) => {

    return (
        <ScrollView
            alwaysBounceVertical={true}
            indicatorStyle='default'
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    onRefresh={refresh}
                    refreshing={refreshing}
                />
            }
        >
            {
                todos ? todos.length === 0 ? <EmptyContainer /> : todos.map(p => <Project projectID={projectID} deleteTodo={deleteTodo} key={p.ID} {...p} />) : null
            }
        </ScrollView>
    )
}
const EmptyContainer = () => {
    const context = useContext(AuthContext)
    const { colorScheme } = context
    return (
        <View style={styles.emptyContainer}>
            <Image style={styles.emptyImage} resizeMode="contain" source={colorScheme.scheme === 'dark' ? require('../../assets/images/empty-img-dark.png') : require('../../assets/images/empty-img.png')} />
            <Text style={{ color: '#ccc' }}>There is nothing here... Start adding a todo</Text>
        </View>

    )
}
const Project = props => {
    const { ID, color, date, important, title, deleteTodo, projectID } = props
    const [checked, check] = useState(false)
    const context = useContext(AuthContext)
    const { colorScheme } = context
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
                <Text style={[styles.projectTitle, { color: colorScheme.mainColor }]}>{title}</Text>
            </View>
            {date ? <Icon color='#f05633' type='feather' name='calendar' /> : null}

        </View>
    )
}

export default ProjectList;