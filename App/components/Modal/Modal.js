import React, { useState } from 'react';
import { Dimensions, Modal, View, StyleSheet, Pressable, Keyboard } from 'react-native'
import styles from './Modal.styles'
const ModalContainer = props => {
  const { opened, open, children } = props
  const dismissHandler = () =>{
    open(false)
    Keyboard.dismiss()
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={opened}
      presentationStyle='overFullScreen'
     >
        {/* <Pressable onPress={dismissHandler} style={styles.centeredView} > */}
     
          <View style={styles.modalView}>
            {children}
          </View>
      {/* </Pressable> */}
    </Modal>
  );
};

export default ModalContainer;