import React from 'react';
import { Dimensions, Modal, View, StyleSheet, Pressable, Keyboard } from 'react-native'
const ModalContainer = props => {
    const { opened, open, children } = props
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={opened}
            presentationStyle='overFullScreen'
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
            <Pressable onPress={()=>Keyboard.dismiss()} style={styles.centeredView} >
                <View style={styles.modalView}>
                    {children}
                </View>
            </Pressable>
        </Modal>
    );
};
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor : 'rgba(0,0,0,0.5)'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      paddingBottom : 10,
      width : Dimensions.get('window').width * .9,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
  });
  
export default ModalContainer;