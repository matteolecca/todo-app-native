import React, { useState } from 'react';
import { Text, Modal, View, StyleSheet, Pressable, Keyboard } from 'react-native'
import { ModeButton } from '../../MainComponents/MainComponents';
import styles from './Modal.styles'
const ModalContainer = props => {
  const { opened, open, centered, children } = props
  const style = centered ? styles.centered : styles.absolute

  const dismissHandler = () => {
    open(false)
    Keyboard.dismiss()
  }
  return (
    <Modal
      animationType={centered ? "fade" : 'slide'}
      transparent={true}
      visible={opened}
      presentationStyle='overFullScreen'
    >
      <View onPress={open} style={[styles.modalView, style]}>
        {children}
      </View>
    </Modal>
  );
};

export default ModalContainer;