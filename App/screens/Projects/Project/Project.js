import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, ActivityIndicator, View, Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { ModeText, ModeButton } from '../../../MainComponents/MainComponents';
import styles from './Project.styles'
import DeleteProjectComponent from '../../DeleteProjectConfirm/DeleteProjectConfirm';
import projectsHook from '../../../hooks/projects-hook'
import AddTodo from '../../AddTodo/AddTodo'
import mainStyles from '../../../App.styles'
import { globalColors } from '../../../constants/colors';
import { AuthContext } from '../../../hooks/auth-hook';

const UserProjects = ({ navigation }) => {
    const { ...data } = projectsHook()
    const { loading, datas, getDatas,} = data
    const context = useContext(AuthContext)
    const [modalOpened, openModal] = useState(false)



    const modalHandler = () => {
        context.openModal(!modalOpened)
        openModal(!modalOpened)
    }

    useEffect(() => {
        getDatas()
    }, [getDatas])


    return (
        <>
            <View style={styles.listTopBar}>
                <ModeText style={[mainStyles.title, { margin: 10 }]}>My List</ModeText>
                <ModeButton onPress={modalHandler}><Icon name='plus-circle' type='feather' color={globalColors.appColor} /></ModeButton>
            </View>
            <AddTodo hidedate opened={modalOpened} open={modalHandler} {...data} />
            {
                loading ? <ActivityIndicator /> :
                    datas ? datas.map(p => (
                        <ListItem key={p.ID}
                            navigation={navigation}
                            title={p.name}
                            color={p.color}
                            ID={p.ID}
                            name={p.name}
                            type='material-icons'
                            
                            {...data}
                        />
                    )) : null}
        </>
    )
}

const rightSwipeActions = (openModal) => {
    return (
        <TouchableOpacity style={styles.trash} onPress={openModal}>
            <Icon color='#fff' name='trash' type='feather' />
        </TouchableOpacity>
    );
};


const ListItem = props => {
    const { ID, title, color, navigation, type, name, defaultProject } = props

    
    const [deleteModalOpened, openDeleteModal] = useState(false)
    const deleteModalHandler = () => { openDeleteModal(!deleteModalOpened) }
    return (
        <>
            <DeleteProjectComponent ID={ID} opened={deleteModalOpened} {...props} open={deleteModalHandler} />
            <Swipeable
                containerStyle={styles.container}
                friction={1}
                renderRightActions={() => rightSwipeActions(deleteModalHandler)}
                overshootRight={false}
            >
                <ModeButton
                    opacity
                    onPress={() => navigation.navigate('projectsList',
                        {
                            title: title,
                            ID: ID,
                            defaultProject: defaultProject,
                            icon: { title: title, color: color, type: type, name: 'circle' }
                        }
                    )}
                    style={[styles.pressable]}
                >
                    <Icon {...props}  name='circle' />
                    <ModeText style={[styles.title]} >
                        {title}
                    </ModeText>
                </ModeButton>
            </Swipeable>
        </>
    );
}

export default UserProjects;
