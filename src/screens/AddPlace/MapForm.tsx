import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  Button,
  Center,
  ButtonText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Icon,
  CloseIcon,
  ModalFooter,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import MapView, { Marker } from "react-native-maps";

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: 400,
    flex: 1,
  },
});

const MapForm = (props) => {
  const {show,close, formik} = props;
  const ref = useRef(null);

  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "You have to activate your location",
        });
        return;
      }
      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);

  const saveLocation = () => {
    console.log(location);
    formik.setFieldValue("location", location)
    close();
  };

  return (
    <Center h={300}>
      <Modal isOpen={show} onClose={close} finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalBody>
            <View>
              <MapView
                initialRegion={location}
                showsUserLocation={true}
                style={styles.mapStyle}
                onRegionChange={(locationTemp) => setLocation(locationTemp)}
              >
                <Marker draggable coordinate={location}></Marker>
              </MapView>
            </View>
          </ModalBody>
          <View alignItems="center" marginTop={"$2"} marginBottom={"$2"}>
            <Button
              w={"$1/2"}
              flexDirection="row"
              alignItems="center"
              px={"$0"}
              p={10}
              onPress={saveLocation}
            >
              <ButtonText
                fontSize={"$lg"}
                marginLeft={"$4"}
                fontWeight="$normal"
                color="black"
              >
                Save location
              </ButtonText>
            </Button>
          </View>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default MapForm;
