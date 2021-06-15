import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalContainer from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import styles from './AddProject.styles'
import { addProjectInputs } from '../../constants/inputs'
import ColorBar from '../../components/ColorBar/ColorBar'
// import DatePicker from 'react-native-date-picker'
const AddProject = props => {
    return (
        <ModalContainer {...props}>
            <View styles={styles.icon}>
                <Text>Add Project</Text>
                <Input{...addProjectInputs['name']}></Input>
                <ColorBar/>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, {backgroundColor : '#ccc'}]} color='#ccc' onPress={() => props.open(false)}>
                        <Text style={{ color: '#fff' }}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} color='#ccc' onPress={() => props.open(false)}>
                        <Text style={{ color: '#fff' }}>Add Project</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ModalContainer>
    );
};

export default AddProject;