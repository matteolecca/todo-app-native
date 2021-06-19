import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalContainer from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import styles from './AddTodo.styles'
import ColorBar from '../../components/ColorBar/ColorBar'
import DatePickerComponent from '../../components/DatePicker/DatePickerComponent';
import { ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { AuthContext } from '../../hooks/auth-hook';
import { ModeText, ModeView } from '../../MainComponents/MainComponents'
import { globalColors } from '../../constants/colors';
const AddTodo = props => {
    const {  inserted, inserting, resetInputs } = props
    
    const leaveHandler = () => {
        resetInputs ? resetInputs() : () => { }
        props.open()
    }
    
    return (
        <ModalContainer {...props}>
            {
                inserted ? <Inserted close={leaveHandler} /> :
                    inserting ? <Loading /> : 
                    <AddTodoComponent {...props}/>
            }
        </ModalContainer>
    );
};

const ButtonsComponent = ({add, leave}) => {
    return (
        <View style={[styles.buttonsContainer]}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#ccc' }]} color='#ccc' onPress={leave}>
                <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: globalColors.appColor }]} color='#ccc' onPress={add}>
                <Text style={{ color: '#fff' }}>Add Project</Text>
            </TouchableOpacity>
        </View>
    )
}

const AddTodoComponent = props => {
    const { inputs, setValue, resetInputs, params, insertData,hidedate  } = props
    const leaveHandler = () => {
        resetInputs ? resetInputs() : () => { }
        props.open()
    }

    const addTodoHandler = () => {
        insertData(params ? params.ID : 'cacca')
    }

    return (
        <ModeView style={[styles.container]} >
            <ModeText style={[styles.title]}>Add Project</ModeText>
            {inputs && <Input onChangeText={(e) => setValue(e, 'name')} {...inputs['name']}  ></Input>}
            <ColorBar setColor={setValue} />
            {!hidedate && <DatePickerComponent setDate={setValue} />}
            <ButtonsComponent leave={leaveHandler} add={addTodoHandler}/>
        </ModeView>
    )
}

const AddProjectComponent = props => {
    const { inputs, setValue, resetInputs, params, insertData  } = props
    const leaveHandler = () => {
        resetInputs ? resetInputs() : () => { }
        props.open()
    }

    const addTodoHandler = () => {
        insertData(params.ID)
    }

    return (
        <ModeView style={[styles.container]} >
            <ModeText style={[styles.title]}>Add Project</ModeText>
            {inputs && <Input onChangeText={(e) => setValue(e, 'name')} {...inputs['name']}  ></Input>}
            <ColorBar setColor={setValue} />
            <ButtonsComponent leave={leaveHandler} add={addTodoHandler}/>
        </ModeView>
    )
}



const Loading = () => {
    return (
        <ModeView style={styles.stateContainer}>
            <ActivityIndicator></ActivityIndicator>
            <ModeText style={{ marginTop: 20 }}>Inserting...</ModeText>
        </ModeView>)
}

const Inserted = ({ close }) => {
    return (
        <ModeView style={styles.stateContainer}>
            <Icon color='#f44336' type='feather' name='check-circle' size={40} />
            <ModeText style={styles.confirmMessage}>Inserted</ModeText>
            <TouchableOpacity style={[styles.button,]} color='#ccc' onPress={() => close(false)}>
                <ModeText >Close</ModeText>
            </TouchableOpacity>
        </ModeView>)
}


export default AddTodo;