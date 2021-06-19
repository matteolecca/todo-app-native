import React from 'react'
import { View, ActivityIndicator, TouchableOpacity } from 'react-native'
import Modal from '../../components/Modal/Modal'
import { ModeText, ModeView } from '../../MainComponents/MainComponents'
import styles from './DeleteProjectConfirm.styles'
import Button from '../../components/Button/Button'
import { globalColors } from '../../constants/colors'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const DeleteProjectComponent = props => {
    const { opened, open, deleting, deleted, deleteData, ID,name, getDatas,resetInputs } = props
    
    const leaveHandler = ()=>{
        resetInputs()
        getDatas()
    }

    const deleteProjectHandler = () =>{
        deleteData(ID)
    }
    return (
        <Modal centered opened={opened} {...props}>
            <ModeView style={[styles.deleteModal]}>
                {
                    deleting ?  <Loading/> :
                    deleted ? <Inserted close={leaveHandler}/>
                    :
                        <>
                            <View style={styles.centerView}>
                                <ModeText style={[styles.deleteModalTitle]}>Delete project {name}?</ModeText>
                            </View>
                            <View style={styles.buttonsContainer}>
                                <Button style={{ marginVertical: 5, marginHorizontal : 10 }} color='#ccc' onPress={open} >back</Button>
                                <Button style={{ marginVertical: 5, marginHorizontal : 10 }} color={globalColors.appColor} onPress={deleteProjectHandler}>delete</Button>
                            </View>
                        </>
                }
            </ModeView>
        </Modal>
    )
}

const Loading = () => {
    return (
        <ModeView style={styles.stateContainer}>
            <ActivityIndicator></ActivityIndicator>
            <ModeText style={{ marginTop: 20 }}>Deleting...</ModeText>
        </ModeView>)
}

const Inserted = ({ close }) => {
    return (
        <ModeView style={styles.stateContainer}>
            <Icon color='#f44336' type='feather' name='check-circle' size={40} />
            <ModeText style={styles.confirmMessage}>Deleted</ModeText>
            <TouchableOpacity style={[styles.button,]} color='#ccc' onPress={() => close(false)}>
                <ModeText >Close</ModeText>
            </TouchableOpacity>
        </ModeView>)
}

export default DeleteProjectComponent