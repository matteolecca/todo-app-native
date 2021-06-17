import React, { useEffect,useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalContainer from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import styles from './AddProject.styles'
import ColorBar from '../../components/ColorBar/ColorBar'
import DatePickerComponent from '../../components/DatePicker/DatePickerComponent';
import { ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
const AddProject = props => {
    const { params, insertTodo, inserted, inserting, resetInputs, inputs, setValue } = props

    const leaveHandler = () =>{
        resetInputs()
        props.open(false)
    }

    const addTodoHandler = ()=>{
        insertTodo(params.ID)
    }

    return (
        <ModalContainer {...props}>
            {
                inserted ? <Inserted close={leaveHandler} /> :
                    inserting ? <Loading /> :
                        <View style={{ flexDirection: 'column', }} >
                            <Text>Add Project</Text>
                            <Input onChangeText={(e) => setValue(e, 'name')} {...inputs['name']} ></Input>
                            <ColorBar setColor={setValue} />
                            <DatePickerComponent setDate={setValue} />
                            <View style={[styles.buttonsContainer]}>
                                <TouchableOpacity style={[styles.button, { backgroundColor: '#ccc' }]} color='#ccc' onPress={leaveHandler}>
                                    <Text style={{ color: '#fff' }}>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button]} color='#ccc' onPress={addTodoHandler}>
                                    <Text style={{ color: '#fff' }}>Add Project</Text>
                                </TouchableOpacity>
                            </View>
                        </View>}
        </ModalContainer>
    );
};

const Loading = () => {
    return (
        <View style={styles.stateContainer}>
            <ActivityIndicator></ActivityIndicator>
            <Text style={{ marginTop: 20 }}>Inserting...</Text>
        </View>)
}

const Inserted = ({ close }) => {
    return (
        <View style={styles.stateContainer}>
            <Icon  color='#f44336' type='feather' name='check-circle' size={40}  />
            <Text style={styles.confirmMessage}>Inserted</Text>
            <TouchableOpacity style={[styles.button,]} color='#ccc' onPress={() => close(false)}>
                <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
        </View>)
}


export default AddProject;