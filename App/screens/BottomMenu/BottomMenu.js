import React, { useEffect,useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import ModalContainer from '../../components/Modal/Modal';
const AddProject = props => {
    const { open }  = props
     return (
        <ModalContainer {...props}>
            <View
            style={{
                height : Dimensions.get('window').height * .8,
                width : Dimensions.get('window').width
            }}
            >
                <Button title="dismiss" onPress={()=>open(false)}>

                </Button>

            </View>
        </ModalContainer>
    );
};



export default AddProject;