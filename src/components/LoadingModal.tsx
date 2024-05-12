import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Button,
  Center,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  Spinner,
  Text
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";

const LoadingModal = (props) => {
  const { show, text, } = props;
  const ref = useRef(null);

  return (
    <Center h={300}>
      <Modal isOpen={show} finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalBody>
            <View>     
            {text && <Text>{text}</Text>}
          <Spinner size="large" />
            </View>
          </ModalBody>
          <View alignItems="center" marginTop={"$2"} marginBottom={"$2"}></View>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default LoadingModal;
